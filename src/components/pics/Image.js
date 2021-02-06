import React from 'react';


const Image = ({ image, onClick }) => {
    const { urls, description } = image;
    
    return(
        <img alt={description} src={urls.regular} onClick={() => onClick(image)} style={{
            height: '200px', width: '250px', cursor: 'pointer'
        }}/>
    );
};

export default Image;