import React from 'react'

function TimeandLocation(props) {
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-white text-xl font-extralight'>
                    {props.localtime}

                </p>
            </div>
                <div className='flex items-center justify-center my-3'>
                    <p className='text-white text-3xl font medium'>
                        {props.country}
                    </p>
                </div>
        </div>
    )
}

export default TimeandLocation
