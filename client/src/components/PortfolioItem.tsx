import React from 'react';
import {MyLink} from './MyLink';

interface PortfolioItemProps {
    handleClick: React.FormEventHandler;
    item: Item;
}

export interface Item {
    title: string;
    badgeIcon?: JSX.Element | undefined;
    github?: MyLink | string | Element | JSX.Element;
    text?: () => JSX.Element[] | JSX.Element;
    image?: (handleClick: React.MouseEventHandler) => Element | JSX.Element;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({handleClick, item}) => {
    const {title, badgeIcon, github, text, image} = item;

    return (
        <div className="portfolio-item">
            <div className="d-flex align-items-center">
                <h3>
                    <strong>{title}</strong>
                </h3>
                {github ? github : null}
            </div>

            {badgeIcon ? badgeIcon : null}
            {text ? text() : null}
            {image ? image(handleClick) : null}
        </div>
    );
};
