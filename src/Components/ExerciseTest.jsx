import React from 'react'

const ExerciseTest = ({gif, alt, name}) => {
    return (
        <div style={styles.container}>
          <h2>{name}</h2>
          <img 
            src={gif} 
            alt={alt}
            style={styles.gif}
          />
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

export default ExerciseTest