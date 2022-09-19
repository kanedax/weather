import React, { useState } from 'react';


const Weather = () => {
    const[backMode , setBackMode] = useState('cold');
    const[colorMode , setColorMode] = useState('cold');
    return (
        <div className={`main-container back_${backMode} font_${colorMode}`}>
            <div className="search">
                <form>
                    <input className='search-input' placeholder='plase enter your country...' ></input>
                </form>
            </div>

            <div className='date-info'>
                <h3>
                    <span id='date'>monday septemper 18,2022</span>
                    <br/>
                    <br/>
                    <span id='time'> 22:10</span>
                </h3>
            </div>

            <div className='weather-status'>
                <h2>
                    <span> 15 C</span>
                </h2>
            </div>

            <div className='weather-situation'>
                <h2>
                    <span> warm </span>
                </h2>
            </div>
        </div>
    );
}

export default Weather;
