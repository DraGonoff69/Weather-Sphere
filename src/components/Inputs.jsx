import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
// import { UilLocationPoint } from '@iconscout/react-unicons'
// import { UilCelsius } from '@iconscout/react-unicons'
// import { UilFahrenheit } from '@iconscout/react-unicons'
// import { UilLineAlt } from '@iconscout/react-unicons'
function Inputs({onSearch}) {
    const [query,setQuery]=useState("");
    const handleSearch=()=>{
        onSearch(query);
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(query);
        }}
    return (
        <div className='flex flex-row justify-center my-6 px-4' >
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4 '>

                <input type='text' value={query} onChange={(e)=>setQuery(e.target.value.toLowerCase())} placeholder="search.. " onKeyDown={handleKeyPress} className='text-xl font-light p-2 shadow-xl focus:outline-none capitalize placeholder:lowercase' />
                <UilSearch size={25} onClick={handleSearch} className="text-white cursor-pointer transition ease-out hover:scale-125" />
                {/* <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" /> */}
            </div>
            {/* <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name="metric" className='text-xl text-white font-light'> <UilCelsius size={20} className="text-white cursor-pointer transition ease-out hover:scale-125" /></button>
                <p className='mx-1 mb-1 font-medium text-white text-2xl'>|</p>
                <button name='imperial'><UilFahrenheit size={20} className="text-white cursor-pointer transition ease-out hover:scale-125" /></button>
            </div> */}
        </div>
    )
}

export default Inputs
