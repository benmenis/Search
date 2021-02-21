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
        marginTop: '30px',
        marginBottom:'20px'
    }
});

const placeholder = {0: 'search for video', 1: 'חפש וידאו'};

const Videos = ({ lang }) => {
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

        let mainVideoTop = 0;
        if(document.getElementsByClassName('vl') && document.getElementsByClassName('vl')[0]){
            mainVideoTop = document.getElementsByClassName('vl')[0].offsetTop;
        }
        
        window.scrollTo(mainVideoTop,mainVideoTop-20);
    }

    return(
        <div >

            <Searchbar
                onSubmit = {onSubmit} 
                placeholder = {placeholder[lang]}
            />

            <Container className= 'vl' maxWidth='lg'>
                <VideoDetails video={selectedVideo} />
            </Container>

            <Container className={classes.list}>
                <VideoList videos={videos} onClick={onVideoSelected} />
            </Container>

        </div>
    );
};

export default Videos;