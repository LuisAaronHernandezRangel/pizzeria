import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from "react"
import Tarjeta from '../components/card';
import pepperoni from '../pepperoni.PNG';



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 40,
      marginLeft:40,
      marginRight:40,
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      },

  }),
);

export default function Pizzas() {
  const classes = useStyles();
  const tipos=[{title:"Cerveza 437 ml",precio:"10",url:"../cerveza.png"},{title:"Agua 500ml",precio:"10",url:"../agua.png"},{title:"Coca-Cola 500ml",precio:"10",url:"../napolitana.png"},{title:"Naranja 1l",precio:"10",url:"../naranja.png"}]
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {tipos.map((pizza,i) => (

            <Grid item xs={12} sm={4} key={i}>
            
                <Tarjeta title={pizza.title} precio={pizza.precio} url={pizza.url}/>
    
            </Grid>
        ))}

      </Grid>
    </div>
  );
}
