import React from 'react'
 
const FaceRecognition = ({applySrc}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img className="imageCanvas " alt='' src={applySrc} />
            </div> 
        </div>
    ) 
}

// 'https://samples.clarifai.com/face-det.jpg'

export default FaceRecognition
