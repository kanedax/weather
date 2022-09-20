import axios from "axios"
import { RECIEVE_WEATHER_ERROR, RECIEVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./weatherType"

const sendWeatherRequest = ()=>{
    return{
        type : SEND_WEATHER_REQUEST
    }
}

const recieveWeatherResponse = (data)=>{
    return{
        type : RECIEVE_WEATHER_RESPONSE ,
        payload : data
    }
}

const recieveWeatherError = (error)=>{
    return{
        type : RECIEVE_WEATHER_ERROR,
        payload : error
    }
}

const getWeatherInfo = (query)=>{
    return dispatch =>{
        dispatch(sendWeatherRequest());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=3381ce13cfecc63b20dd219a3ba6a30d&units=metric`)
        .then(res=>{
            dispatch(recieveWeatherResponse(res.data))
        }).catch(error=>{
            dispatch(recieveWeatherError(error.message))
        })
    }
}
export default getWeatherInfo ;