import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewPlayer = props => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [age, setAge] = useState(0);

    const addPlayer = e => {
        e.preventDefault();
        const Player = {firstName,lastName,position,age};
        axios.post("http://localhost:8000/api/players", Player)
            .then( res => 
                console.log(res),
                navigate("/manage")
            )
            .catch( err => console.log(err));
    }

    return(
        <article className="message is-info" style={{padding:"40px"}}>
            <h1 className="title">New Activity</h1>
            <div className="message-header">
                <p>Add Activity</p>
            </div>
            <div className="message-body">
                <form onSubmit = { addPlayer }> 
                    <input type="text" className="input is-info" style={{marginBottom:"10px"}} placeholder="Enter First Name" onChange={e=> setFirstName(e.target.value)}/>
                    <input type="text" className="input is-info" style={{marginBottom:"10px"}} placeholder="Enter Last Name" onChange={e=> setLastName(e.target.value)}/>
                    <input type="text" className="input is-info" style={{marginBottom:"10px"}} placeholder="Enter Position" onChange={e=> setPosition(e.target.value)}/>
                    <input type="Number" className="input is-info" style={{marginBottom:"10px"}} placeholder="Enter Age" onChange={e=> setAge(e.target.value)}/>
                    <button type="submit" style={{width:"100%"}} className="button is-info">Add Player</button>
                </form>
            </div>
        </article>
    )
}

export default NewPlayer;