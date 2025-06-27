import React from 'react';
import '../styles/style.css';
import cam from '../assets/cam.png';
const FeedbackImg = () => {
    return (
        <div className='feedback_image'>
            <img src={cam} alt='' className='cam'></img>
        </div>
    );
}
export default FeedbackImg;