import React, { useState, useEffect } from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import TablaLista from "./TablaLista";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// const Listdata = ({datos , eliminar}) => {
const Step2 = ({
  datos,
  setLista,
  lista,
  potmax,
  setPotmax,
  potmed,
  setPotmed,
}) => {
  const classes = useStyles();
  const [opcion, setOpcionState] = useState("");

  useEffect(() => {
    total();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lista]);

  const addrow = (e) => {
    const lista2 = lista.concat([
      {
        id: e.target.value,
        one: 1,
        two: JSON.parse(e.target.value),
      },
    ]);
    setLista(lista2);
  };

  function total() {
    if (lista.length === 0) {
      setPotmax(0);
      setPotmed(0);
    }
    let potmed2 = 0;
    let potmax2 = 0;
    lista.map((input) =>  { 
      setPotmax(
        potmax2 + parseInt(input.one * input.two.Potencia * input.two.Arranque)
      );
      potmax2 =
        potmax2 + parseInt(input.one * input.two.Potencia * input.two.Arranque);
      setPotmed(
        potmed2 +
          parseFloat(
            parseFloat(
              input.one * input.two.Potencia * input.two.Porcentaje
            ).toFixed(2)
          )
      );
      potmed2 =
        potmed2 +
        parseFloat(
          parseFloat(
            input.one * input.two.Potencia * input.two.Porcentaje
          ).toFixed(2)
        );
       return ""
    });
    
  }

  return (
    <div className="list">

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Selecciona</InputLabel>
        <Select
          native
          value={opcion}
          onChange={(e)=>addrow(e)}
          label="Electrodomestico"
        >
        <option aria-label="None" value="" />
          {datos.map((dato)=>(
                        <option  key={dato.Electrodomestico} value={JSON.stringify(dato)}>{dato.Electrodomestico}</option>
                    ))}
        </Select>
      </FormControl>
      <TablaLista lista={lista} potmax={potmax} potmed={potmed} setLista={setLista}/>
    </div>
  );
};

export default Step2;
