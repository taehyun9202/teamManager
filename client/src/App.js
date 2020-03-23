import React from 'react';
import 'bulma/css/bulma.min.css';
import { Router, Link } from '@reach/router';
import PlayerStatus from './components/PlayerStatus';
import ManagePlayer from './components/ManagePlayers';
import NewPlayer from './components/NewPlayer';

function App() {
  return (
    <div className="App">
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container" >
            <Link to="/manage" className="title">Manage Players</Link>
            <h1 className="title" style={{display:"inline-block"}}>  &nbsp; |  &nbsp;</h1>
            <Link to="/status" className="title">Manage Player Status</Link>
          </div>
        </div>
      </section>
      
      <Router>
        <PlayerStatus path="/status" />
        <ManagePlayer path="/manage" />
        <NewPlayer path="/manage/new" />
      </Router>
    </div>
  );
}

export default App;
