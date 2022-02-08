import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
//import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import CakeIcon from '@material-ui/icons/Cake';
import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));



export default function Breadcrumb() {
  const classes = useStyles();

  return (
    <Breadcrumbs separator='' aria-label="breadcrumb">
      <Link to="/">
        <LocalPizzaIcon className={classes.icon} />
        Pizzas
      </Link>
      <Link to="/empanadas">
        <WhatshotIcon className={classes.icon} />
        Empanadas
      </Link>
      <Link to="/bebidas">
        <LocalBarIcon className={classes.icon} />
        Bebidas
      </Link>
      <Link to="/">
        <CakeIcon className={classes.icon} />
        Postres
      </Link>
 
    </Breadcrumbs>
  );
}
