
import "./App.css";
import React from 'react';
import Weather from './components/Weather';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
function App() {
  return (
    <div className='px-4 sm:mx-auto max-w-screen-md sm:mt-4 sm:py-5 sm:px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-grey-400'>
      <Weather/>
    </div>

  );
}

export default App;
