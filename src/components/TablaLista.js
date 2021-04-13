import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconButton, TextField } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TablaLista({lista,potmax,potmed,setLista,disable,handleDisable}) {
  const classes = useStyles();
  let total = [0];

  const deleteRow = (id) => {
    let disable2 = [...disable];
    disable2.splice(lista.findIndex(x => x.id === id ),1)
    handleDisable(disable2)
    const lista2 = lista.filter((item) => item.two.Electrodomestico !== id);
    setLista(lista2);    
  }

  const handlerCant = (e, index) => {
    const list2 = [...lista];
    list2[index].one = e.target.value;
    setLista(list2);
  };

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Cantidad</TableCell>
            <TableCell>Equipo</TableCell>
            <TableCell>Consumo</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lista.map((item,index) =>  ( 
            <TableRow key={item.two.Electrodomestico}>
              <TableCell>
                <TextField
                        label="Cantidad" variant="outlined" type="number"
                        id={item.two.Electrodomestico}
                        value={lista[index].one}
                        onChange={(e) => handlerCant(e, index)} 
                        inputProps={{min:1}}/>  
                </TableCell>
                <TableCell >{item.two.Electrodomestico}</TableCell>
                <TableCell >{item.two.Consumo}</TableCell>
                <TableCell >
                <IconButton
                        color="secondary"
                        onClick={() =>
                          deleteRow(item.two.Electrodomestico, index)
                        }
                      >
                        <HighlightOffIcon />
                      </IconButton>
                </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={1}>Potencia maxima</TableCell>
            <TableCell align="right">{potmax}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Potencia media</TableCell>
            <TableCell align="right">{potmed}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{lista.map((item,index)=> {
                total[index]=item.one
                console.log(total);
                })}{total.reduce((a, b) =>  parseInt(a) + parseInt(b))}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}