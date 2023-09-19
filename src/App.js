// src/App.js
import "./App.css";
import React from 'react';
import Weather from './components/Weather';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
function App() {
  return (
    <div className='sm:mx-auto lg:max-w-screen-md sm:max-w-scree-sm sm:mt-4 sm:py-5 sm:px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-grey-400'>
      {/* <TopButtons /> */}
      {/* <Inputs /> */}
      <Weather/>
      {/* <TimeandLocation /> */}
      {/* <TemperatureandDetails /> */}
      {/* <Forecast title='Hourly Forecast'/>
      <Forecast title='Daily Forecast'/> */}
    </div>

  );
}

export default App;
