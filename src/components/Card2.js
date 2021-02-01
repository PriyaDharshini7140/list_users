import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Sample from './Sample';
import { nameContext } from '../App';

const useStyles = makeStyles({
  root: {
    minWidth: 75,
    backgroundColor:"lightblue",
   marginRight:430,
   marginLeft:350,
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
});
export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
 
  return (
    <Card className={classes.root} variant="outlined" >
      <center>
      {/* <nameContext.Consumer>{(value)=>value.filter((element)=>element.name == )}</nameContext.Consumer> */}
      </center>
    </Card>
  );
}
