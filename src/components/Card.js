import React, { useEffect, useState } from 'react';
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
    backgroundColor:"#39a1d1",
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
    
    <Card className={classes.root} variant="outlined">
      {props.load == false ? props.data.map(e => <><p>{e.name}</p></>):props.data.map(e => <><p><b>name: </b>{e.name}</p>
    <p><b>phoneNumber: </b>{e.phone}</p>
    <p><b>userName: </b>{e.username}</p>
    <p><b>webSite: </b>{e.website}</p>
    <p><b>mailId: </b>{e.email}</p>
    <p><b>address:</b>
          <p><b>(street: </b>{e.address.street}
           <b>, suite: </b>{e.address.suite}
          <b>, city: </b>{e.address.city}
          <b>, zipCode: </b>{e.address.zipcode}<b>)</b></p></p>
    <p><b>companyName: </b>{e.company.name}</p>
    </> )}
   {/* {props.data.map(e => <><p><b>name: </b>{e.name}</p>
    <p><b>phoneNumber: </b>{e.phone}</p>
    <p><b>userName: </b>{e.username}</p>
    <p><b>webSite: </b>{e.website}</p>
    <p><b>mailId: </b>{e.email}</p>
    <p><b>address:</b>
          <p><b>(street: </b>{e.address.street}
           <b>, suite: </b>{e.address.suite}
          <b>, city: </b>{e.address.city}
          <b>, zipCode: </b>{e.address.zipcode}<b>)</b></p></p>
    <p><b>companyName: </b>{e.company.name}</p>
    </> )}<br/> */}
    </Card>
    
    );
}
