import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../components'

import { 
    LandingPage,
    ComprasPage,
    LotesPage,
    ProdutosPage,
    NotFound } from '../pages';

const ApplicationRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" render={Layout} />
            <Route exact path="/produtos" render={Layout} />
            <Route exact path="/lotes" render={Layout} />
            <Route exact path="/compras" render={Layout} />
            <Route render={Layout} />
        </Switch>
    )
}

const PublicRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" render={LandingPage} />
            <Route exact path="/produtos" render={ProdutosPage} />
            <Route exact path="/lotes" render={LotesPage} />
            <Route exact path="/compras" render={ComprasPage} />
            <Route render={NotFound} />
        </Switch>
    );
}


export { ApplicationRoutes, PublicRoutes };