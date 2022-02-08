import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from "react"
import Tarjeta from '../components/card';
import atun from '../atun.PNG';



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

export default function Empanadas() {
  const classes = useStyles();
  const atuns=atun
  const tipos=[{title:"Empanada Atún",precio:"10",url:'../atun.png'},{title:"Empanada de Carne",precio:"10",url:"../carne.png"},{title:"Empanada de Jamón y Queso",precio:"10",url:"../jamon.png"}]
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {tipos.map((empanada,i) => (

            <Grid item xs={12} sm={4} key={i}>
            
                <Tarjeta title={empanada.title} precio={empanada.precio} url={empanada.url}/>
    
            </Grid>
        ))}

      </Grid>
    </div>
  );
}