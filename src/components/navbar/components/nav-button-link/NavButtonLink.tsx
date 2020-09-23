import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavButtonLink.module.css';

interface NavButtonLinkProps {
    to: string,
    title: string
}

const NavButtonLink = ({ to, title }: NavButtonLinkProps) => {
    return (
        <Link to={to} className={classes.AnchorLink}>{title}</Link>
    )
}

export default NavButtonLink;