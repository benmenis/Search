import React from 'react';
import Image from './Image';


const ImageList = ({ images, onClick }) => {

    const renderedImages = images.map(image => 
            <Image key={image.id} image={image} onClick={onClick} />
    );

    return(
        <div className='ui relaxed divided list'> 
            {renderedImages}
        </div>
    );
};

export default ImageList;