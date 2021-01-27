import React from 'react';
import Videos from './videos/Videos';
import Pics from './pics/Pics';
import Terms from './terms/Terms';

import { useParams } from 'react-router-dom';



const Content = () => {
    const { navItem } = useParams();
    switch( navItem ){
        case 'videos':
            return <Videos />;
        case 'pics':
            return <Pics />;
        case 'terms':
            return <Terms />;
    }
};

export default Content;