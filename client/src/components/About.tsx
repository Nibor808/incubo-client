import React, {useEffect, useState} from 'react';
import moment from 'moment';
import robin from '../styles/images/robin-head.jpeg';
import {useStats} from '../hooks/useStats';
import {TimeValues} from '../types';

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
                <img src={robin} alt="me" height="350px" width="350px" className="img-fluid" />
                <h2>Robin Erickson</h2>
                <p>software developer</p>
                <p>Exploring technology one language at a time.</p>
            </div>

            {/* eslint-disable-next-line react/no-danger */}
            <span dangerouslySetInnerHTML={{__html: useStats(time)}} />
        </div>
    );
};
