import React, { useState } from 'react';
import Content from './Content';

import { useHistory, useParams } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    grow: { flexGrow: 1 },
    button:{color:'white'}
});

const defVal = {'videos': 0, 'pics': 1, 'terms': 2};
const videoLabel = {0: 'videos', 1: 'וידאו'};
const picsLabel = {0: 'images', 1: 'תמונות'};
const termsLabel = {0: 'terms', 1: 'מושגים'};
const langs = {0: 'עברית', 1: 'english'};

const Navigator = ({ lang, changeLang }) => {
    const classes = useStyle();

    const { navItem } = useParams();

    const [value, setValue] = useState(defVal[navItem]);
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
                    <Tab value={0} label={videoLabel[lang]} />
                    <Tab value={1} label={picsLabel[lang]} />
                    <Tab value={2} label={termsLabel[lang]} />
                </Tabs>
                <div className={classes.grow} />
                <Button className={classes.button} onClick={() => changeLang(-(lang-1))}>{langs[lang]}</Button>
                </ToolBar>
            </AppBar>
            <Container maxWidth="lg">
                <Content lang={lang}/>
            </Container>
        </div>
       
    );
};

export default Navigator;