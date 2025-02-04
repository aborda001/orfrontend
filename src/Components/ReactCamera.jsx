import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Conéctate al backend Flask

const ReactCamera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
      mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: "video/webm" });

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          socket.emit("video_chunk", event.data);
        }
      };
    });

    // Recibir coordenadas de poses desde el backend
    socket.on("pose_data", (poses) => {
      drawPose(poses);
    });

    return () => socket.off("pose_data");
  }, []);

  const startRecording = () => {
    mediaRecorderRef.current.start(300); // Enviar fragmentos cada 300ms
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const drawPose = (poses) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    poses.forEach(({ x, y }) => {
      ctx.beginPath();
      ctx.arc(x * canvas.width, y * canvas.height, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();
    });
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline width="640" height="480" />
      <canvas ref={canvasRef} width="640" height="480" style={{ position: "absolute", top: 0, left: 0 }} />
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? "Detener Grabación" : "Iniciar Grabación"}
      </button>
    </div>
  );
};

export default ReactCamera;
