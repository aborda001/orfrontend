import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, onHandleVideo }) => {
    const onHandleVideoA = (value) => () => {
        onHandleVideo(value);
    }

    onHandleVideoA(false);

    return (
        <>
            <ReactPlayer
                url={`http://localhost:5000/video/${url}`}
                playing={true}
                controls={true}
                width="600px"
                height="400px"
                onEnded={onHandleVideoA(true)}
            />
        </>
    );
};

export default VideoPlayer;
