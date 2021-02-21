import React from 'react';


const Image = ({ image, onClick }) => {
    const { urls, description } = image;
    
    return(
        <img alt={description} src={urls.regular} onClick={() => onClick(image)} style={{
            maxHeight: 0.80*window.innerHeight, width: '70%', cursor: 'pointer'
        }}/>
    );
};

export default Image;