// import './Video.css';
import React from 'react';


const Video = ({video, onClick}) => {

    return(
        <div className="video item" onClick={() => onClick(video)}>
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default Video;