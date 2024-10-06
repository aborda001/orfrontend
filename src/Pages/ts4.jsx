import React, { useState } from 'react'
import ExerciseTest from '../Components/ExerciseTest'
import ExerciseAction from '../Components/ExerciseAction'

import gif from '../Media/Exercices/ts4.gif'

const Ts4 = () => {
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
                        alt='Remos con peso'
                        name='Demostración del ejercicio'
                    />
                </>
                :
                <>
                    <ExerciseAction 
                        name='Remos con peso'
                    />
                </>
            }

        </>
    )
}

export default Ts4