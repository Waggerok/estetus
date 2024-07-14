import React from 'react';

//video
import Video from '../videos/bg.mp4';

const Background = () => {
    return (
        <video className='background__media-video' src={Video} autoPlay muted loop></video>
    );
};

export default Background;