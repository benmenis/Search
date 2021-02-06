import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    media:{
        width: '100%',
        height: '95%'
    }
});


const VideoDetails = ({video}) => {
        const classes = useStyle();

        if (video){
            const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
            return(
                <div>
                    <Card >
                        <CardActionArea>
                            <CardMedia className={classes.media}>
                            <div className="ui embed">
                                <iframe title="video" src={videoSrc} />
                            </div>
                            </CardMedia>
                            <CardContent>
                            <Typography >
                            {video.snippet.title}
                        </Typography>
                        <p>{video.snippet.description}</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            );
        }
        return <div></div>
}

export default VideoDetails;