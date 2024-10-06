import React, { useState } from 'react'
import ExerciseTest from '../Components/ExerciseTest'
import ExerciseAction from '../Components/ExerciseAction'

import gif from '../Media/Exercices/ts3.gif'

const Ts3 = () => {
    const isExercise = useState(false)

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
                <>
                    <ExerciseAction 
                        name='Press de hombros'
                   />
                </>
            }

        </>
    )
}

export default Ts3