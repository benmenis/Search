import React, { useEffect, useState } from 'react';
import Searchbar from '../Searchbar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';
import Youtube from '../../axios/Youtube';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const KEY = 'AIzaSyA7VzvRCPYCH1kAnihsY9iIHmuE773sRSI';

const useStyle = makeStyles({
    list:{
        overflowY: 'scroll',
        height: '500px'
    }
});

const Videos = () => {
    const classes = useStyle();

    const [videos, setVideos] = useState([]);
    const [term, setTerm] = useState('buildings');
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const getVideos = async () => {
            const response = await Youtube.get('/search',
                {params:{
                    part: 'snippet',
                    maxResults: 10,
                    key: KEY,
                    type: 'video',
                    q: term
                }}
            );
            
            setVideos(response.data.items);
            setSelectedVideo(response.data.items[0]);
        };

        getVideos();

    }, [term]);

    const onSubmit = (e, newterm) => {
        e.preventDefault();
        setTerm(newterm);
    };

    const onVideoSelected = video => {
        setSelectedVideo(video);
    }

    return(
        <div >
            <Searchbar
                onSubmit = {onSubmit} 
                placeholder = "Search for video"
            />
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Container maxWidth='lg'>
                        <VideoDetails video={selectedVideo} />
                    </Container>
                </Grid>
                <Grid item xs={4}>
                    <Container className={classes.list}>
                        <VideoList videos={videos} onClick={onVideoSelected} />
                    </Container>
                </Grid>
            </Grid>

        </div>
    );
};

export default Videos;