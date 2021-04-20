import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Step2 from "./Step2";
import Step1 from "./Step1";
import Step3 from "./Step3";


//use Styles son los estilos, solo ignorar
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

//getSteps son nombres en el stepper
function getSteps() {
  return ["Inmueble", "Electrodomesticos", "Combos"];
}

//getStepContent te escupe segun la pestaña del stepper
function getStepContent(
  stepIndex, webo
) {
  switch (stepIndex) {
    case 0:
      return <Step1 handlePlace={webo?.handlePlace} place={webo?.place} activeStep box={webo?.box} handleBox={webo?.handleBox} />;
    case 1:
      return (
        <div>
          { 
            <Step2
              datos={webo?.datos}
              lista={webo?.lista}
              setLista={webo?.handleLista}
              setPotmax={webo?.handlePotmax}
              setPotmed={webo?.handlePotmed}
              potmed={webo?.potmed}
              potmax={webo?.potmax}
            />
          }
        </div>
      );
    case 2:
      return (
        <div>
          {
            <Step3 
            potmed={webo?.potmed}
            potmax={webo?.potmax}
            combo={webo?.combo}
            />
        }
        </div>
      );
    default:
      return "Unknown stepIndex";
  }
}

// aqui es donde se pone el nombre del componente como funcion
export default function Pap() {
  const [place, setPlace] = useState({"lugar":"casa","box":[0,0]});
  const [potmax, setPotmax] = useState(0);
  const [potmed, setPotmed] = useState(0);
  const [lista, setLista] = useState([]);
  const [datos, setDatos] = useState([]);
  const [combo, setCombos] = useState(null);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [box, setBox] = useState([0,0]);

  const webo = {
    datos,
    handlePlace,
    place,
    lista,
    handleLista,
    potmax,
    handlePotmax,
    potmed,
    handlePotmed,
    combo,
    box,
    handleBox}
  

  function handlePotmax(newValue) {
    setPotmax(newValue);
  }
  function handlePotmed(newValue) {
    setPotmed(newValue);
  }
  function handlePlace(newValue) {
    setPlace(newValue);
  }
  function handleLista(newValue) {
    setLista(newValue);
  }
  function handleBox(newValue) {
    setBox(newValue);
  }

  useEffect(() => {
      fetch("http://localhost:4000/getData").then((res) => res.json())
      .then((data) => {
        setDatos(data[0].Producto);
        setCombos(data[0].Combo);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };



  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(
              activeStep, webo
            )}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext} disabled={activeStep === 1 && potmed === 0}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
