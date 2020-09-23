import React from 'react';
import { NavButtonLink } from './components';

import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <ul className={classes.Navbar}>
            <li>
                <NavButtonLink to="/" title="Home"/>
            </li>
            <li>
                <NavButtonLink to="/lotes" title="Lotes"/>
            </li>
            <li>
                <NavButtonLink to="/produtos" title="Produtos"/>
            </li>
            <li>
                <NavButtonLink to="/compras" title="Compras"/>
            </li>
        </ul>
    )
};

export default Navbar;