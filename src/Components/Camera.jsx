import React, { useState } from 'react'

const Camera = ({ onHandleResponse, exercise }) => {

    const [video, setVideo] = useState(null)

    const handleVideo = (e) => {
        setVideo(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('video', video)
        formData.append('exercise', exercise)
        fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => onHandleResponse({ ...data, isSuccessful: true }))
            .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" name='video' accept='video/' onChange={handleVideo} required />
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Camera