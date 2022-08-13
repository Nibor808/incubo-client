import React from 'react';

export interface Item {
    title: string;
    github?: React.ReactElement;
    text?: () => React.ReactElement[] | React.ReactElement;
    image?: (handleClick?: React.MouseEventHandler) => React.ReactElement;
}

export interface TimeValues {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
