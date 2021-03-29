import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { FormControlLabel, Radio } from "@material-ui/core";

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
}));

export default function Inmueble({ handlePlace, place }) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    handlePlace(event.target.value);
    if (event.target.value === "casa") {
      console.log(place);
    }
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <FormControlLabel
                checked={place === "casa"}
                value="casa"
                control={<Radio color="primary" />}
                label="Hogar"
                onChange={handleChange}
              />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <FormControlLabel
                checked={place === "empresa"}
                value="empresa"
                control={<Radio color="primary" />}
                label="Empresa"
                onChange={handleChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
