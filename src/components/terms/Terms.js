import React, { useEffect, useState } from 'react';
import Searchbar from '../Searchbar';
import Axios from 'axios';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import ToolBar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    card:{
        marginBottom: '10px',
        padding: '10px'
    },
    list: {
        // overflowY: 'scroll',
        // height: '500px'
    },
    grow: { flexGrow: 1 },
});

const placeholder = {0: 'search for term', 1: 'חפש מושג'};

const Terms = ({ lang }) => {
    const classes = useStyle();

    const [term, setTerm] = useState('buildings');
    const [wikiRes, setWikiRes] = useState([]);
    const [selctedImage, setSelectedImage] = useState(null);

    // console.log(wikiRes)


    useEffect(() => {
        const getResults = async () => {
            const response = await Axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        origin: '*',
                        action: "query",
                        list: "search",
                        srsearch: term,
                        format: "json"
                    }
                }
            );

            setWikiRes(response.data.query.search);
        }
        getResults();
    }, [term]);

    const onSubmit = (e, newTerm) => {
        e.preventDefault();
        setTerm(newTerm);
    };

    const renderedResults = wikiRes.map( result => {
        return(
            <div key={result.pageid} className="item">
                <Card className={classes.card}>
                    <ToolBar>
                    <div className="content">
                        <div className="ui header">
                            {result.title}
                        </div>
                        <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
                    </div>
                    <div className={classes.grow} />
                    <div className="right floated content">
                        <a
                            className="ui button"
                            href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        >
                            GO
                        </a>
                    </div>
                    </ToolBar>
                </Card>
            </div>
        );
    });

    return(
        <div>
            <Searchbar onSubmit={onSubmit} placeholder = {placeholder[lang]}/>
            <Container className={classes.list}>
                {renderedResults}
            </Container>
        </div>
    );
};

export default Terms;