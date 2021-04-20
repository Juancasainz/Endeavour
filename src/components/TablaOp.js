import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { yellow, red, green } from '@material-ui/core/colors';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    red: {
      backgroundColor: red[500]
    },
    yellow: {
      backgroundColor: yellow[500]
    },
    green: {
      backgroundColor: green[500]
    },
    tablacentrada: {
        display: 'flex',
        alignItems: 'center',
    }
  });

  

  export default function TablaOp({combo, combosAptos}){
    const classes = useStyles();
    function chooseColor(comb){
      if (comb.id === "5") return classes.green
      if (comb.id===combosAptos.id) return classes.yellow
      if (comb.id<combosAptos.id) return classes.red
      if (comb.id>combosAptos.id) return classes.green
    }
    return (

<TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow align="center">
            <TableCell>Sistema</TableCell>
            <TableCell align="right">Potencia Máxima</TableCell>
            <TableCell align="right">Potencia media</TableCell>
            <TableCell align="right">Baterias de gel</TableCell>
            <TableCell className={classes.tablacentrada} >Espacio requerido
            <Tooltip title="Los paneles solares miden 164cm x 99cm">
            <InfoOutlinedIcon fontSize='small'></InfoOutlinedIcon>
            </Tooltip>
            </TableCell>
            <TableCell align="right">Duracion (horas)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {combo.map((comb) => ( 
            <TableRow className={chooseColor(comb)}  key={comb.Producto}>
              <TableCell component="th" scope="row">{comb.Producto}</TableCell>
              <TableCell align="right">{comb.potmax}</TableCell>
              <TableCell align="right">{comb.potmed}</TableCell>
              <TableCell align="right">{comb.baterias}</TableCell>
              <TableCell align="right">{comb.paneles}</TableCell>
              <TableCell align="right">{comb.duracion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     );
}
 
