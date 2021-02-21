// import './Video.css';
import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root:{
        marginBottom: "10px",
        padding:'10px'
    }
});

const Video = ({video, onClick}) => {
    const classes = useStyle();

    return(
        // <Paper elevation={2} className={classes.root}>
            <div className="video item" onClick={() => onClick(video)} style={{cursor:'pointer', marginBottom: "10px", padding:'10px'}}>
                <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
                <br/>
                <br/>
                <div className="content">
                    <div className="header">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        //{/* </Paper> */}
    );
}

export default Video;