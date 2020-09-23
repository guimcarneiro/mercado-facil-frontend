import React, { ReactNode } from 'react';

import classes from './DefaultPageTemplate.module.css';

interface DefaultPageTemplateProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
}

const DefaultPageTemplate = ({ title, subtitle, children }: DefaultPageTemplateProps) => {
    return (
        <div className={classes.DefaultPageTemplate}>
            <div className={classes.titleContainer}>
                <h2>{ title }</h2>
                <p>{ subtitle }</p>
            </div>
            <div className={classes.content}>
                { children }
            </div>
        </div>
    );
}

export default DefaultPageTemplate;