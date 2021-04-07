import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }


  export default function TablaOp({combo}){
    const classes = useStyles();
    return (

<TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Sistema</TableCell>
            <TableCell align="right">Potencia Máxima</TableCell>
            <TableCell align="right">Potencia media</TableCell>
            <TableCell align="right">baterias</TableCell>
            <TableCell align="right">paneles</TableCell>
            <TableCell align="right">Duracion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {combo.map((comb) => ( 
            <TableRow key={comb.Producto}>
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
 
