import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  mas: {
    marginLeft: 'auto',
  },

});

export default function CardCombo({title, combo, potmed, potmax}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  
  const alamedidadescripcion = () => { return (
  <div>
    <p>Incluye {Math.ceil(0.0125*(Math.ceil(potmed/100)*100)/2)*2} baterias y {Math.ceil((5*(Math.ceil(potmed/100)*100)/330/2)*2)} paneles. </p>
    <p>Cubre hasta {parseFloat((((Math.ceil(0.0125*(Math.ceil(potmed/100)*100)/2)*2)*1440)/(Math.ceil(potmed/100)*100)).toFixed(2))} horas.  </p>
  </div>)
  }

  const combodescripcion = () => { return (
    <div>
      <p>Incluye {combo?.baterias} baterias y {combo?.paneles} paneles.</p>
      <p>Cubre un promedio de {combo?.duracion} horas.</p>
    </div>)
    }


  return (

    <Card className={classes.root}>
      <CardContent align='center'>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {combo?.Producto}
        </Typography>
        <Typography variant="body2" component="span">
          {title === "A la medida" ? alamedidadescripcion() : combodescripcion() }
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.mas} size="small" >mas</Button>
      </CardActions>
    </Card>

    
  );
}