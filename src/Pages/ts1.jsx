import React, { useState } from 'react'
import ExerciseTest from '../Components/ExerciseTest'
import ExerciseAction from '../Components/ExerciseAction'
import Camera from '../Components/Camera'

import gif from '../Media/Exercices/ts1.gif'

const Ts1 = () => {
    const isExercise = useState(false)
    const [response, setResponse] = useState({
        isSuccessful: false,
        newVideo: 'video.mp4'
    })

    const handleResponse = (response) => {
        setResponse(response);
        console.log(response);
    }

    // console.log(response);


    setTimeout(() => {
        isExercise[1](true)
    }, 5000)



    return (
        <>
            {!isExercise[0] ?
                <>
                    <ExerciseTest
                        gif={gif}
                        alt='Flexiones de brazos'
                        name='Demostración del ejercicio'
                    />
                </>
                :
                !response.isSuccessful ?
                    <>
                        <ExerciseAction
                            name='Flexiones de brazos'
                        />
                        <Camera
                            exercise='ts1'
                            onHandleResponse={handleResponse}
                        />
                    </>
                    :
                    <ExerciseAction
                        name='Flexiones de brazos'
                        video={true}
                        videoName={response.newVideo}
                        isValid={true}
                    />
            }
        </>
    )
}

export default Ts1