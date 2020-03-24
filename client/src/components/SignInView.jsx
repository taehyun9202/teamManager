import React from 'react';
import Register from './Register';
import Login from './Login';



const SignInView = props => {
  return (
    <div className="columns">
      <div className="column">
        <Register style={{margin:"20px;"}} />
      </div>
      <div className="column">
        <Login style={{margin:"20px;"}} />
      </div>
    </div>
  );
}

export default SignInView;