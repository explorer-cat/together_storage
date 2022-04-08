
import './App.css';
import Login from './pages/login/login'
import React, { useState } from 'react';



function App() {
  let [token , setToken] = React.useState(0)

  return (
    <div className="App">
      <div className = "wrap">
        <Login token={token}/>
      </div>
    </div>
  );
}

export default App;
