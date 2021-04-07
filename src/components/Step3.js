import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardCombo from "./CardCombo";
import TablaOp from './TablaOp';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const Step3 = ({combo, potmax, potmed}) => {
    const classes = useStyles();
    const selectCombo = () => {
        if (potmax <= 1500 && potmed <= 500 && potmax > 0) return [combo[0],combo[1]]
        if (potmax <= 3000 && potmed <= 600 && potmax > 1500) return [combo[2],combo[3]]
        if (potmax <= 6000 && potmed <= 1200 && potmax > 3000) return [combo[3],combo[4]]
        if (potmax <= 9000 && potmed <= 1800 && potmax > 6000) return [combo[4],combo[5]]
    }
    
    const alamedida = ()=>{

    }
   
   
    return ( 
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <CardCombo title={"Combo Standard"} combo={selectCombo()[0]}/>
        </Grid>
        <Grid item xs>
            <CardCombo title={"Combo optimo"} combo={selectCombo()[1]}/>
        </Grid>
        <Grid item xs>
            <CardCombo title={"A la medida"} potmax={potmax} potmed={potmed}/>
        </Grid>
      </Grid>
      <TablaOp combo={combo}/>
      CONOCE TODOS NUESTROS COMBOS
    </div>
     );
}
 
export default Step3;