import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';

import { ApplicationRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <Switch>
        <ApplicationRoutes />
      </Switch>
    </div>
  );
}

export default App;
