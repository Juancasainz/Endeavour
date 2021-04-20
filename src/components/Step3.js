import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardCombo from "./CardCombo";
import TablaOp from './TablaOp';
import { Typography } from '@material-ui/core';


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

    return ( 
    <div className={classes.root}>
      <Typography variant="h3"></Typography>
      <TablaOp combo={combo} combosAptos={selectCombo()[0]}/><br/>
      <Grid container spacing={3}>
        <Grid item xs>
          <CardCombo title={"Combo Standard"} combo={selectCombo()[0]} gato={"/img/gato4.jpg"}/>
        </Grid>
        {selectCombo()[0].Producto === "Combo 3" ? "": 
        <Grid item xs>
          <CardCombo title={"Combo optimo"} combo={selectCombo()[1]} gato={"/img/gato3.jpg"}/> 
        </Grid>}
        <Grid item xs>
            <CardCombo title={"A la medida"} potmax={potmax} potmed={potmed} gato={"/img/gato5.jpg"}/>
        </Grid>
      </Grid>
      <br/>

      
    </div>
     );
}
 
export default Step3;