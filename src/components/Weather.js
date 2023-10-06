import React, { useEffect, useState } from 'react';
import TimeandLocation from './TimeandLocation';
import TopButtons from './TopButtons';
import Inputs from './Inputs';
import TemperatureandDetails from './TemperatureandDetails';
import Forecast from './Forecast';

function Weather() {
    const [data, setData] = useState({
        city: "",
        temperature: "",
        feels: "",
        humidity: "",
        speed: "", localtime: "",
        Text: "", Icon: "",
        Rise: "", Set: "", High: "", Low: "",
        hTemp: [],
        dTemp:[]

    });
    const [todayWeather, setTodayWeather] = useState([]);
    const [dailyWeather, setdailyWeather] = useState([]);


    const [loc, setLoc] = useState("India");

    useEffect(() => {
        const fetchWeather = async () => {
            const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${loc}&days=3`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '0a70f05d8fmsh2a558ec87f021cep16c8b0jsnee134ef1b577',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                // Process the data and update state outside of useEffect
                const newData = {
                    city: result.location.name,
                    temperature: result.current.temp_c,
                    feels: result.current.feelslike_c,
                    humidity: result.current.humidity,
                    speed: result.current.wind_kph,
                    localtime: result.location.localtime,
                    Text: result.current.condition.text,
                    Icon: result.current.condition.icon,
                    Rise: result["forecast"]["forecastday"][0]["astro"]["sunrise"],
                    Set: result["forecast"]["forecastday"][0]["astro"]["sunset"],
                    High: result["forecast"]["forecastday"][0]["day"]["maxtemp_c"],
                    Low: result["forecast"]["forecastday"][0]["day"]["mintemp_c"],
                    hTemp: result["forecast"]["forecastday"][0]["hour"],
                    dTemp: result["forecast"]["forecastday"]
                };
                setData(newData);

                const hourlyWeather = newData.hTemp.map((val, index) => {
                    const dateObject = new Date(val.time);
                    const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    // console.log(index);
                    if (index === 0 || index === 3 || index === 7 || index === 11 || index === 15) {
                        return (
                            <div className='flex flex-col items-center justify-center' key={index}>
                                <p className='font-light text-sm'>
                                    {timeString}
                                </p>
                                <img src={val.condition.icon} alt="" className='w-12 my-1' />
                                <p className='font-medium'>{val.temp_c} °C</p>
                            </div>

                        )
                    }
                    return null;
                })
                setTodayWeather(hourlyWeather)
                const dailyWeather = newData.dTemp.map((value, indexs) => {
                    const dateObject = new Date(value.date);
                    const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                
                    return (
                        <div className='flex flex-col items-center justify-center' key={indexs}>
                            <p className='font-light text-sm'>
                                {timeString}
                            </p>
                            <img src={value.day.condition.icon} alt="" className='w-12 my-1' />
                            <p className='font-medium'>{value.day.maxtemp_c} °C</p>
                        </div>
                    )
                });


                setdailyWeather(dailyWeather)

                console.log(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchWeather();
    }, [loc]);
    
    return (
        <div className='mb-10'>
            <TopButtons setLoc={setLoc} />
            <Inputs onSearch={setLoc} />
            {/* <div>Weather</div>
            <div>Location: {data.city}</div>
            <div>Temperature: {data.temperature}</div>
            <div>feels: {data.feels}</div>
            <div>Humidity: {data.humidity}</div>
            <div>Speed: {data.speed}</div>
            <div>Localtime: {data.localtime}</div> */}

            <TimeandLocation country={data.city} localtime={data.localtime} />
            <TemperatureandDetails Temperature={data.temperature} feels={data.feels} Humidity={data.humidity} Speed={data.speed} Text={data.Text} Icon={data.Icon} Set={data.Set} Rise={data.Rise} High={data.High} Low={data.Low} />
            <Forecast title='Hourly Forecast' todayWeather={todayWeather} />
            <Forecast title='Daily Forecast' dailyWeather={dailyWeather}/>

        </div>
    );
}

export default Weather;
