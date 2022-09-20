import moment from 'moment-jalaali';
import React, { useEffect, useState } from 'react';


const weekDays = [
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنج شنبه',
    'جمعه',
    'شنبه',
]
const yearMonth = [
    'فروردین',
    'اردبیهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
]
const PersianDate = () => {

    const [date , setDate] = useState('');
    const[time , setTime] = useState('');

    useEffect(() => {
        let m = moment()
        let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${yearMonth[m.jMonth()]} ${m.jYear()}`
        setDate(finalDate);
        setTime(m.format("HH:mm"))
    }, []);

    return (

        <div>
            <span>{date}</span>
            <br/>
            <br/>
            <span>{time}</span>
        </div>
    );
}

export default PersianDate;
