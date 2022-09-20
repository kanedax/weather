import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getWeatherInfo from '../redux/weather/weatherAction';
import PersianDate from './persiandate';


const Weather = () => {
    const{loading, data , error} = useSelector(state=>state);
    const dispatch = useDispatch();

    const[backMode , setBackMode] = useState('usual');
    const[colorMode , setColorMode] = useState('usual');
    const[query , setQuery] = useState('');

    const handleGetWeather = e=>{
        e.preventDefault()
        dispatch(getWeatherInfo(query))
        console.log(data);
        setQuery('')
    }

    useEffect(()=>{
        if(!data.main){
            return
        }
        let temp =data.main.temp
        if(temp<15){
            setBackMode('cold')
            setColorMode('cold')
        }else if (temp<25){
            setBackMode('usual')
            setColorMode('usual')
        }else if (temp<30){
            setBackMode('warm')
            setColorMode('warm')
        }else if (temp>30){
            setBackMode('hot')
            setColorMode('hot')
        }
    },[data])
    return (
        <div className={`main-container back_${backMode} font_${colorMode}`}>
            <div className="search">
                <form onSubmit={handleGetWeather}>
                    <input autoFocus className='search-input' placeholder={data.name || 'نام شهر یا کشور...'} value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                    ></input>
                </form>
            </div>

            <div className='date-info'>
                <h3>
                    <PersianDate/>
                </h3>
            </div>

            {loading ? (
                <div>
                    <h3 className='title'>
                        <i className="fas fa-spinner fa-spin"></i>
                    </h3>
                </div>
            ) : data.main ? (
                <div className='weather-info'>
                    <div className='weather-status'>
                        <h2>
                            <span> {Math.round(data.main.temp)}</span>°C
                            <i className='fas fa-temperature-high'></i>
                        </h2>
                    </div>
                    <div className='weather-situation'>
                        <h2>
                            <span> {data.weather[0].main} </span>
                            <i className='fas fa-cloud-sun'></i>
                        </h2>
                    </div>
                    <div className='weather-humidity'>
                        <h2>
                            <span>{data.main.humidity}</span>%
                            <i className='fas fa-tint'></i>
                        </h2>
                    </div>
                    <div className='weather-wind'>
                        <h2>
                            <span>{data.wind.speed}</span>KM/H
                            <i className='fas fa-wind'></i>
                        </h2>
                    </div>
                </div>
            ) : error ? (
                <h3 className='title'>نام شهر یا کشور را به درستی وارد کنید</h3>
            ) :(
                <h3 className='title'>نام شهر یا کشور را جستجو کنید</h3>
            )}
        </div>
    );
}

export default Weather;




            