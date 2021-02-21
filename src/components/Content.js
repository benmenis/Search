import React from 'react';
import Videos from './videos/Videos';
import Pics from './pics/Pics';
import Terms from './terms/Terms';

import { useParams } from 'react-router-dom';



const Content = ({ lang }) => {
    const { navItem } = useParams();
    switch( navItem ){
        case 'videos':
            return <Videos lang={lang}/>;
        case 'pics':
            return <Pics lang={lang}/>;
        case 'terms':
            return <Terms lang={lang}/>;
    }
};

export default Content;