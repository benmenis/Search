import React from 'react';
import Searchbar from '../Searchbar';

const Pics = () => {
    
    const onSubmit = () => {

    };

    return(
        <div>
            <Searchbar onSubmit={onSubmit} placeholder = "Search for picture"/>
        </div>
    );
};

export default Pics;
