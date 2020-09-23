import React from 'react';
import { PublicRoutes } from '../../routes';
import Navbar from '../navbar/Navbar';

import classes from './Layout.module.css';


const Layout = () => {
    return (
        <div className={classes.Layout}>
            <header>
                <h2>Mercado Fácil</h2>
            </header>
            <div className={classes["navbar-container"]}>
                <Navbar/>
            </div>
            <div className={classes["content"]}>
                <PublicRoutes />
            </div>
        </div>
    );
}

export default Layout;