import React, { useEffect, useState } from 'react';
import Searchbar from '../Searchbar';
import ImageList from './ImageList';
import Unsplash from '../../axios/unsplash';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    list:{
        overflowY: 'scroll',
        height: '500px',
        textAlign: 'center'
    },
    image: {
        height: '100%',
        width: '95%'
    }
});

const Pics = () => {
    const classes = useStyle();

    const [term, setTerm] = useState('buildings');
    const [images, setImages] = useState([]);
    const [selctedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const getImages = async () => {
            const response = await Unsplash.get(
                '/search/photos', {
                    params: {query: term}
                }
            );
            setImages(response.data.results);
            setSelectedImage(response.data.results[0]);
        };

        getImages();
    }, [term]);

    const onSubmit = (e, newTerm) => {
        e.preventDefault();
        setTerm(newTerm);
    };

    const onImageSelected = image => {
        setSelectedImage(image);
    };

    return(
        <div>
            <Searchbar onSubmit={onSubmit} placeholder = "Search for picture"/>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Container maxWidth='lg'>
                        {selctedImage ? <img className={classes.image} alt={selctedImage.description} src={selctedImage.urls.regular} /> : <div/>}
                    </Container>
                </Grid>
                <Grid item xs={4}>
                    <Container className={classes.list}>
                        <ImageList images={images} onClick={onImageSelected} />
                    </Container>
                </Grid>
            </Grid>

        </div>
    );
};

export default Pics;
