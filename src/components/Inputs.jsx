import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'

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
        <div className='flex flex-row justify-center my-6 sm:px-4 lg:px-0 md:px-0' >
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4 '>

                <input type='text' value={query} onChange={(e)=>setQuery(e.target.value.toLowerCase())} placeholder="search.. " onKeyDown={handleKeyPress} className='text-xl font-light p-2 shadow-xl focus:outline-none capitalize placeholder:lowercase' />
                <UilSearch size={25} onClick={handleSearch} className="text-white cursor-pointer transition ease-out hover:scale-125" />

            </div>
        </div>
    )
}

export default Inputs
