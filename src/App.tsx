import React from 'react';
import FetchData from './components/FetchData';

import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className='mainHeading'>DEV DYNAMICS STATS</h1>
      <FetchData />
    </div>
  );
};

export default App;
