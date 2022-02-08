import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Breadcrumb from './breadcrumb';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginTop: 20,
    },
    paper3: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      },
  }),
);

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Typography  variant="h3">Nuclear's Pizzería</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          
            <Typography className={classes.paper3} variant="h6">Categorías</Typography>
            <Typography className={classes.paper3}variant="h9">Elige de nuestro delicioso Catálogo</Typography>
          
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}><Breadcrumb/></Paper>
        </Grid>

      </Grid>
    </div>
  );
}


