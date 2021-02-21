import React, { useEffect, useState } from 'react';
import Searchbar from '../Searchbar';
import ImageList from './ImageList';
import Unsplash from '../../axios/unsplash';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    list:{
        // overflowY: 'scroll',
        // height: '500px',
        textAlign: 'center',
        marginTop:'30px'
    },
    image: {
        width: '100%',
        maxHeight: 0.95*window.innerHeight
    }
});

const placeholder = {0: 'search for image', 1: 'חפש תמונה'};

const Pics = ({ lang }) => {
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
        let mainImageTop = 0;
        if(document.getElementsByClassName('si') && document.getElementsByClassName('si')[0]){
            mainImageTop = document.getElementsByClassName('si')[0].offsetTop;
        }
        window.scrollTo(mainImageTop, mainImageTop-20)
    };

    return(
        <div className='pics'>
            <Searchbar onSubmit={onSubmit} placeholder = {placeholder[lang]}/>

            <Container className="si" maxWidth='lg'>
                {selctedImage ? <img className={classes.image} alt={selctedImage.description} src={selctedImage.urls.regular} /> : <div/>}
            </Container>

            <Container className={classes.list}>
                <ImageList images={images} onClick={onImageSelected} />
            </Container>

        </div>
    );
};

export default Pics;
