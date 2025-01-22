import React, { useState } from 'react'
import ExerciseTest from '../Components/ExerciseTest'
import ExerciseAction from '../Components/ExerciseAction'
import Camera from '../Components/Camera'

import gif from '../Media/Exercices/ts2.gif'

const Ts3 = () => {
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
                        alt='Dominadas'
                        name='Demostración del ejercicio'
                    />
                </>
                :
                !response.isSuccessful ?
                    <>
                        <ExerciseAction
                            name='Dominadas'
                        />
                        <Camera
                            exercise='ts2'
                            onHandleResponse={handleResponse}
                        />
                    </>
                    :
                    <ExerciseAction
                        name='Dominadas'
                        video={true}
                        videoName={response.newVideo}
                        isValid={false}
                    />
            }
        </>
    )
}

export default Ts3