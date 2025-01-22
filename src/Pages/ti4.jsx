import React, { useState } from 'react'
import ExerciseTest from '../Components/ExerciseTest'
import ExerciseAction from '../Components/ExerciseAction'
import Camera from '../Components/Camera'

import gif from '../Media/Exercices/ti3.gif'

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
                        alt='Sentadillas búlgaras'
                        name='Demostración del ejercicio'
                    />
                </>
                :
                !response.isSuccessful ?
                    <>
                        <ExerciseAction
                            name='Sentadillas búlgaras'
                        />
                        <Camera
                            exercise='ts1'
                            onHandleResponse={handleResponse}
                        />
                    </>
                    :
                    <ExerciseAction
                        name='Sentadillas búlgaras'
                        video={true}
                        videoName={response.newVideo}
                        isValid={false}
                    />
            }
        </>
    )
}

export default Ts1