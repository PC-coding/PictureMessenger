import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { setCameraImage } from '../../features/cameraSlice';
import { useDispatch } from 'react-redux';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: 'user',
};

export default function WebcamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
    }, [webcamRef]);

    return (
        <div className='webcamCapture'>
            <Webcam 
                audio = {false}
                height = {videoConstraints.height}
                ref = {webcamRef}
                screenshotFormat = 'image/jpeg'
                width = {videoConstraints.width}
                videoConstraints = {videoConstraints}
            />

            <RadioButtonUncheckedIcon 
                className='webcamCapture_button'
                onClick = {capture}
                fontSize = 'large'
            />
        </div>
    )
}