import React, { useState } from 'react'
import ExerciseTest from '../Components/ExerciseTest'
import ExerciseAction from '../Components/ExerciseAction'
import Camera from '../Components/Camera'

import gif from '../Media/Exercices/ts3.gif'

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
                        alt='Press de hombros'
                        name='Demostración del ejercicio'
                    />
                </>
                :
                !response.isSuccessful ?
                    <>
                        <ExerciseAction
                            name='Press de hombros'
                        />
                        <Camera
                            onHandleResponse={handleResponse}
                        />
                    </>
                    :
                    <ExerciseAction
                        name='Press de hombros'
                        video={true}
                        videoName={response.newVideo}
                        isValid={response.isVideoValid}
                    />

            }

        </>
    )
}

export default Ts3