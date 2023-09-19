import React from 'react'

function TopButtons(props) {
    const cities =
        [{
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Sydney'
        },
        {
            id: 3,
            title: 'Toronto'
        },
        {
            id: 4,
            title: 'India'
        },
        {
            id: 5,
            title: 'Tokyo'
        }
        ]
    return (
        <div className='flex items-center justify-around sm:text-xs my-6'>
            {cities.map((city) => (
                <button key={city.id} className='text-white lg:text-lg font-medium sm:text-xs' onClick={()=>props.setLoc(city.title)}>{city.title}</button>
            ))}
        </div>
    )
}

export default TopButtons