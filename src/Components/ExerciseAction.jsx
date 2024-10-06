import React from 'react'

const ExercicesAction = ({name}) => {
    return (
        <div style={styles.container}>
            <h2>{name}</h2>
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