import React, { useState } from 'react'
import ExerciseTest from '../Components/ExerciseTest'
import ExerciseAction from '../Components/ExerciseAction'

import gif from '../Media/Exercices/ts1.gif'

const Ts1 = () => {
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
                        alt='Flexiones de brazos'
                        name='Demostración del ejercicio'
                    />
                </>
                :
                <>
                    <ExerciseAction />
                </>
            }

        </>
    )
}

export default Ts1