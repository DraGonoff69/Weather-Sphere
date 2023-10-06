import React from 'react'

function Forecast({ title, todayWeather,dailyWeather }) {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white font-medium uppercase '>{title}</p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-row items-center justify-between text-white'>
          {todayWeather}
          {dailyWeather}
      </div>
    </div>
  )
}

export default Forecast
