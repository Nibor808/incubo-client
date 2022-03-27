import React from 'react';
import {MyLinkProps} from './components/MyLink';

export interface Item {
    title: string;
    badgeIcon?: React.ReactElement | undefined;
    github?: MyLinkProps | React.ReactElement;
    text?: () => React.ReactElement[] | React.ReactElement;
    image?: (handleClick?: React.MouseEventHandler) => Element | React.ReactElement;
}

export interface TimeValues {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
