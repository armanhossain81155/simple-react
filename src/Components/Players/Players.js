import React from 'react';

import { Card }  from 'react-bootstrap'
import {Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning } from '@fortawesome/free-solid-svg-icons'
import './Players.css'




const Players = (props) => {
    
     const {id,image,  name , salary, budget} = props.player;
    
    const renderCard = () => {
        return(
            <Card style={{ width: '18rem' , height:'25rem' }} className="box" key={id}>
            <Card.Img variant="top" src={image} className="main-img" />
            <Card.Body>
              <Card.Title>Name : {name}  </Card.Title>
              <Card.Text>
                Salary : {salary}
                <br />
                Total Budget : ${budget}
              </Card.Text>
              <Button onClick = {() => props.handleAddPlayer(props.player)} variant="info"><FontAwesomeIcon icon={faRunning} /> Select Player</Button>
            </Card.Body>
          </Card>
        )
    }



    return (
        <div >
            <div> {renderCard()} </div>
        </div>
    );
};

export default Players;