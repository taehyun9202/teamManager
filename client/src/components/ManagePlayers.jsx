import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const ManagePlayers = props => {
    const [players, setPlayers] = useState([]);
    const fetchActivities = () =>{
        axios.get("http://localhost:8000/api/players", {
            withCredentials: true
          })
            .then(res => setPlayers(res.data))
            .catch(err =>console.log(err));
    }

    useEffect(()=>{
        fetchActivities();
    },[])

    const remove = _id => {
        axios.delete(`http://localhost:8000/api/players/${_id}`, {
            withCredentials: true
          })
            .then(res => {
                fetchActivities();
            })
            .catch(err =>console.log(err));
    }

    return (
        <div className="columns" style={{padding:"40px"}}>
        <div className="column">
            <h1 className="title">Player</h1>
            <div className="message-header">
                <Link style={{paddingLeft:"10px"}} to="/manage">Player List</Link>
                <Link style={{position:"absolute", left:"130px"}} to="/manage/new">Add Player</Link>
            </div>
            <div className="message-body">
                <div class="table-container">
                    <table class="table">
                        <tr>
                            <th style={{width:"60%"}}>Player Name</th>
                            <th style={{width:"20%"}}>Age</th>
                            <th style={{width:"20%"}}>Position</th>
                            <th style={{width:"20%"}}>Action</th>
                        </tr>
                        {   
                        players.map(a => 
                            <tr key = {a._id}> 
                                <td style={{width:"60%"}}>{a.lastName}, {a.firstName}</td>
                                <td style={{width:"20%"}}>{a.age}</td>
                                <td style={{width:"20%"}}>{a.position}</td>
                                <td style={{width:"20%"}}><a href="#" onClick={ e => remove(a._id) }>Delete</a></td>
                            </tr>
                        )
                        }
                    </table>
                </div>
            </div>
        </div>
        
        </div>
    )
}

    export default ManagePlayers;