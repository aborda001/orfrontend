import React, { useState } from 'react'
import VideoPlayer from '../Components/VideoPlayer'

const ExercicesAction = ({ name, video, videoName, isValid }) => {
    const [finalized, setFinalized] = useState(false);

    const handleFinalized = () => {
        setFinalized(true);
        console.log('Finalizado');
    }

    return (
        <div style={styles.container}>
            <h2>{name}</h2>

            {video && <VideoPlayer url={videoName}
                onHandleVideo={handleFinalized}
            />}
            {!finalized ?
                <h2>Realiza el ejercicio</h2>
                :
                isValid ?
                    <h2>¡Ejercicio realizado correctamente!</h2>
                    :
                    <h2>¡Ejercicio realizado incorrectamente!</h2>
            }
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    gif: {
        width: '300px',
        height: 'auto',
    }
};

export default ExercicesAction