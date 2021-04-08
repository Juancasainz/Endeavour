import React, { useState ,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, FormControlLabel, Radio, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
  boxEmpresa:{
    borderColor:"#673ab7"
  },
}));



export default function Inmueble({ handlePlace, place, box, handleBox }) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState();


  const handleChange = (lugar) => {
    if(lugar === "casa"){
      let place2 = place;
      place2 = {"lugar":"casa","box":[3,0]}
      handlePlace(place2)      
    }
    else {
      let place2 = place;
      place2 = {"lugar":"empresa","box":[0,3]}
      handlePlace(place2)   
    }
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={3} onClick={(e)=>handleChange("casa")}>
          <Box className={classes.boxEmpresa} border={place?.box[0]} borderRadius={8}>
            <Card className={classes.root} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/img/gato1.jpg"
                  title="casa"                 
                />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Hogar
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Igual no vas a tener internet
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Box>
          </Grid>
          <Grid item xs={3} onClick={(e)=>handleChange("empresa")}>
          <Box className={classes.boxEmpresa} border={place?.box[1]} borderRadius={8}>
          <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/img/gato2.jpg"
                  title="empresa"
                />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2" value="empresa">
                Empresarial
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" value="empresa">
                Cubre al maximo tus ups y tus vainas
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          </Box>           
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
