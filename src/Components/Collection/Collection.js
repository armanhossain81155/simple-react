import React from 'react';
import {Button } from 'react-bootstrap'

const Collection = (props) => {
    const collection = props.collection
    console.log(collection);
    let total = 0;
    let name = "";
    let budget = "";
    for (let i = 0; i < collection.length; i++) {
        const player = collection[i];
        total = total + player.budget;
        name = player.name +" ," + name;
        budget = player.budget + "," + budget;
        
    }
    return (
        <div>
            <h2>Total Player : 15</h2>
            <p>(you can select only 11 player for making a Team)</p>
            <h4>Player Selected : <small> {collection.length}</small> </h4>
            
            <h4>Team Player Name : <small>{name}</small>

            </h4>
            <h4>Budget per player: <small> {budget}</small></h4>
            <h4>Total Budget: <small>${total}</small> </h4>
            <Button variant = "primary">Create Team</Button>
           
           
            
        </div>
    );
};

export default Collection;