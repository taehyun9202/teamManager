import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const ManagePlayers = props => {
    const [players, setPlayers] = useState([]);
    const fetchActivities = () =>{
        axios.get("http://localhost:8000/api/players")
            .then(res => setPlayers(res.data))
            .catch(err =>console.log(err));
    }

    useEffect(()=>{
        fetchActivities();
    },[])

    const playingChange = () => {
    document.getElementById("CPlaying").className="button is-info";
    }
    const notPlayingChange = () => {
        document.getElementById("CnotPlaying").className="button is-danger";
    }
    const undecidedChange = () => {
        document.getElementById("CUndecided").className="button is-warning";
    }

    return (
        <div className="columns" style={{padding:"40px"}}>
        <div className="column">
            <h1 className="title">Player Status</h1>
            <div className="message-header">
                <Link style={{paddingLeft:"10px"}} to="/manage">Player List</Link>
                <Link style={{position:"absolute", left:"130px"}} to="/manage/new">Add Player</Link>
            </div>
            <div className="message-body">
                <div class="table-container">
                    <table class="table">
                        <tr>
                            <th style={{width:"40%"}}>Player Name</th>
                            <th style={{width:"60%"}}>Action</th>
                        </tr>
                        {   
                        players.map(a => 
                            <tr key = {a._id}> 
                                <td style={{width:"30%"}}>{a.lastName}, {a.firstName}</td>
                                <td style={{width:"70%"}}>
                                    <ul> 
                                        <li style={{marginRight:"20px", display:"inline-block"}} ><a id="CPlaying" onClick={playingChange} className="button is-info is-light">Playing</a></li>
                                        <li style={{marginRight:"20px", display:"inline-block"}} ><a id="CnotPlaying" onClick={notPlayingChange} className="button is-danger is-light">Not Playing</a></li>
                                        <li style={{marginRight:"20px", display:"inline-block"}} ><a id="CUndecided" onClick={undecidedChange} className="button is-warning is-light">Undecided</a></li>
                                    </ul>
                                </td>
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