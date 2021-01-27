import React, { useState } from 'react';
import Content from './Content';

import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';

const Navigator = () => {
    const [value, setValue] = useState(0);
    const history = useHistory();

    const handleTabChange = (event, newVal) => {
        let selectedTab = '';
        switch( newVal ){
            case 0:
                selectedTab = '/videos';
                break;
            case 1:
                selectedTab = '/pics';
                break;
            case 2:
                selectedTab = '/terms';
        }
        history.push(selectedTab);
      
        setValue(newVal);
    }

    return(
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleTabChange} variant="fullWidth" aria-label="nav tabs example" >
                    <Tab value={0} label="videos" />
                    <Tab value={1} label="pics" />
                    <Tab value={2} label="terms" />
                </Tabs>
            </AppBar>
            <Container maxWidth="lg">
                <Content />
            </Container>
        </div>
       
    );
};

export default Navigator;