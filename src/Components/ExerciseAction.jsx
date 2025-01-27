import React, { useState } from "react";
import VideoPlayer from "../Components/VideoPlayer";

const ExercicesAction = ({ name, video, videoName, isValid, message = "" }) => {
  const [finalized, setFinalized] = useState(false);
  const [notify, setNotify] = useState({
    notify: false,
    message: "",
  });

  const handleFinalized = () => {
    setFinalized(true);
    console.log("Finalizado");
  };

  setTimeout(() => {
    setNotify({
      notify: false,
      message: "",
    });
  }, 6000);

  notify.notify &&
    setTimeout(() => {
      setNotify({
        notify: false,
        message: "",
      });
    }, 11000);

  return (
    <div style={styles.container}>
      <h2>{name}</h2>

      {video && <VideoPlayer url={videoName} onHandleVideo={handleFinalized} />}
      {!finalized ? (
        <h2>Realiza el ejercicio</h2>
      ) : isValid ? (
        <>
          <h2>¡Ejercicio realizado correctamente!</h2>
          <h3>{message}</h3>
        </>
      ) : (
        <>
          <h2>¡Ejercicio realizado incorrectamente!</h2>
          <h3>{message}</h3>
        </>
      )}

      {video && notify.notify && !finalized && (
        <h2>{notify.message}</h2>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  gif: {
    width: "300px",
    height: "auto",
  },
};

export default ExercicesAction;
