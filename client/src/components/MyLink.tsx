import React from 'react';

export interface MyLinkProps {
    title: string | JSX.Element;
    href: string;
    klass?: string;
}

export const MyLink: React.FC<MyLinkProps> = ({title, href, klass}) => {
    return (
        <a href={href} target={'_blank'} rel="noopener noreferrer" className={klass}>
            {title}
        </a>
    );
};
