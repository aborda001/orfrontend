import React, { useState } from "react";
import ExerciseTest from "../Components/ExerciseTest";
import ExerciseAction from "../Components/ExerciseAction";
import Camera from "../Components/Camera";

import gif from "../Media/Exercices/ti2.gif";

const Ts1 = () => {
  const isExercise = useState(false);
  const [response, setResponse] = useState({
    isSuccessful: false,
    newVideo: "video.mp4",
  });

  const handleResponse = (response) => {
    setResponse(response);
    console.log(response);
  };

  setTimeout(() => {
    isExercise[1](true);
  }, 5000);

  return (
    <>
      {!isExercise[0] ? (
        <>
          <ExerciseTest
            gif={gif}
            alt="Peso muerto"
            name="Demostración del ejercicio"
          />
        </>
      ) : !response.isSuccessful ? (
        <>
          <ExerciseAction
            name="Peso muerto
"
          />
          <Camera exercise="ti2" onHandleResponse={handleResponse} />
        </>
      ) : (
        <ExerciseAction
          name="Peso muerto"
          video={true}
          videoName={response.newVideo}
          isValid={response.isVideoValid}
          message={response.message}
        />
      )}
    </>
  );
};

export default Ts1;
