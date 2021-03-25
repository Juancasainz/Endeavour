import React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step2 from './Step2';
import Step1 from './Step1';

//use Styles son los estilos, solo ignorar
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
  return ['Inmueble', 'Electrodomesticos', 'Combos'];
}



//getStepContent te escupe segun la pestaña del stepper
function getStepContent(stepIndex,datos,handlePlace,place,lista,handleLista,potmax,handlePotmax,potmed,handlePotmed) {
  switch (stepIndex) {
    case 0:
      return (<Step1 
        handlePlace={handlePlace} 
        place={place}
        activeStep
        />)
    case 1:
      return (<div>
        {datos && <Step2 datos={datos} lista={lista} 
        setLista={handleLista} setPotmax={handlePotmax} 
        setPotmed={handlePotmed} potmed={potmed} potmax={potmax}/>}
      </div>)
    case 2:
      return 'Selecciona el tipo de combo que necesites';
    default:
      return 'Unknown stepIndex';
  }
}

// aqui es donde se pone el nombre del componente como funcion
export default function Pap() {

  const [place, setPlace] = useState('casa');
  const [potmax, setPotmax] = useState(0);
  const [potmed, setPotmed] = useState(0);
  const [lista, setLista] = useState([]);
  const [datos, setDatos] = useState([]);
  const [combo, setCombos] = useState(null);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

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

    useEffect(()=>{
        Promise.all([
            fetch("data/combo.json").then((res) => res.json()),
            fetch("data/data.json").then((res) => res.json()),
          ]).then(([combo, data]) => {
            setDatos(data)
            setCombos(combo)
          }).catch(err =>console.log(err.message) );
    },[]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

const handleChangue= input=>e=>{
  this.setState({[input]:e.target.value});
}

  return (
    <div className={classes.root}>
      <h1>{place}</h1>
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
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep,datos,handlePlace,place,lista,handleLista,potmax,handlePotmax,potmed,handlePotmed)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}