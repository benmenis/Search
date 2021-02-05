import React, { useState } from 'react';
import Content from './Content';

import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    grow: { flexGrow: 1 },
});


const Navigator = () => {
    const classes = useStyle();

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
                <ToolBar>
                <Tabs value={value} onChange={handleTabChange}  aria-label="nav tabs example" >
                    <Tab value={0} label="videos" />
                    <Tab value={1} label="pics" />
                    <Tab value={2} label="terms" />
                </Tabs>
                <div className={classes.grow} />
                <p>english</p>
                </ToolBar>
            </AppBar>
            <Container maxWidth="lg">
                <Content />
            </Container>
        </div>
       
    );
};

export default Navigator;