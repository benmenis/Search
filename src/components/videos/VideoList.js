import React from 'react';
import Video from './Video';


const VideoList = ({videos, onClick}) => {

    const renderedVideos = videos.map( video => <Video key={video.id.videoId} video={video} onClick={onClick} />);

    return(
        <div className='ui relaxed divided list'> 
            {renderedVideos}
        </div>
    );  
}

export default VideoList;