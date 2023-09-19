import React from 'react';
import {  UilTemperature, UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons"

function TemperatureandDetails(props) {
    return (
        <div>

            <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
                <p>{props.Text}</p>
            </div>
            <div className='flex flex-row items-center justify-between text-white py-3'>
                <img src={props.Icon}alt="" className='w-20' />
                <p className='text-5xl'>{props.Temperature}°C</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex font-light text-sm item-center justify-center'>
                        <UilTemperature size={15} className="mr-1" />
                        Feels: {props.feels}°C
                        <span className='font-medium ml-1'></span>
                    </div>
                    <div className='flex font-light text-sm item-center justify-center'>
                        <UilTear size={15} className="mr-1" />
                        Humidity:{props.Humidity}
                        <span className='font-medium ml-1'></span>
                    </div>
                    <div className='flex font-light text-sm item-center justify-center'>
                        <UilWind size={15} className="mr-1" />
                        Wind: {props.Speed} km/hr
                        <span className='font-medium ml-1'></span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <p className='font-light'>
                Rise: <span className='font-medium '>{props.Rise}</span>
            </p>
            <UilSunset/>
            <p className='font-light'>
                Set: <span className='font-medium '>{props.Set}</span>
            </p>
            <p className='font-light'>
                High: <span className='font-medium '>{props.High}°C</span>
            </p>
            <p className='font-light'>
                Low: <span className='font-medium '>{props.Low}°C</span>
            </p>
            </div>
        </div>
    )
}

export default TemperatureandDetails
