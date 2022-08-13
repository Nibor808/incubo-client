import React, {useEffect, useState} from 'react';
import moment from 'moment';
import robin from '../styles/images/robin-head.jpeg';
import {useStats} from '../hooks/useStats';
import {TimeValues} from '../types';

export const myInfo = {
    name: 'Robin Erickson',
    title: 'software developer',
    blurb: 'Exploring technology one language at a time.'
}

export const About: React.FC = () => {
    const [time, setTime] = useState<TimeValues>({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const setTimeForDisplay = () => {
        const timeSinceStartDate = moment().diff([2016, 0, 1]);
        const activeTime = moment.duration(timeSinceStartDate);

        setTime({
            years: activeTime.years(),
            months: activeTime.months(),
            days: activeTime.days(),
            hours: activeTime.hours(),
            minutes: activeTime.minutes(),
            seconds: activeTime.seconds(),
        });
    };

    useEffect(() => {
        const timeActive = setInterval(setTimeForDisplay, 1000);
        return () => clearInterval(timeActive);
    }, []);

    return (
        <div className="top-box d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center flex-column">
                <img src={robin} alt="Robin Erickson" height="350px" width="350px" className="img-fluid" />
                <h2>{myInfo.name}</h2>
                <p>{myInfo.title}</p>
                <p>{myInfo.blurb}</p>
            </div>

            {/* eslint-disable-next-line react/no-danger */}
            <span dangerouslySetInnerHTML={{__html: useStats(time)}} />
        </div>
    );
};
