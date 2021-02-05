import React, { useState } from "react";
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px',
        marginBottom: '20px',
        margin: 'auto',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '50%',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

const Searchbar = ({ onSubmit, placeholder }) => {
    const classes = useStyles();

    const [term, setTerm] = useState(''); 

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    const handleClear = () => {
        setTerm('');
    };

    return (
        <>
        <Paper component="form" variant="outlined" onSubmit={(e) => onSubmit(e, term)} className={classes.root}>

            <InputBase
                onChange={handleChange}
                value = {term}
                className={classes.input}
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Button  onClick={handleClear}>
                X
            </Button>
    `   </Paper>
        </>
    );
};

export default Searchbar;
