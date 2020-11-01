import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Landing from './view/Landing';


const App = () => {
  return (
      <div className="va-container">
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="view">
          <h1>Quick Posts</h1>
          <hr />
          <Landing />
        </div>
      </div>
  )
}

export default App;