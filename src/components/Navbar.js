import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import About from './About'
import { Link, BrowserRouter as Router } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: "white",
  },
  link:{
    textDecoration: 'none' ,
    color: "white",
    fontFamily: "Arial"

  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        
      <Typography variant="h6"  className={classes.title}><Link color="secondary" to="/" className={classes.link}>Home</Link></Typography>
        
        
        <Button color="inherit"><Link to="/about" className={classes.link}>About</Link></Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
