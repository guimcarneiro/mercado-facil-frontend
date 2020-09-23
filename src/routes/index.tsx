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
            <Route exact path="/" component={Layout} />
            <Route exact path="/produtos" component={Layout} />
            <Route exact path="/lotes" component={Layout} />
            <Route exact path="/compras" component={Layout} />
            <Route render={Layout} />
        </Switch>
    )
}

const PublicRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/produtos" component={ProdutosPage} />
            <Route exact path="/lotes" component={LotesPage} />
            <Route exact path="/compras" component={ComprasPage} />
            <Route render={NotFound} />
        </Switch>
    );
}


export { ApplicationRoutes, PublicRoutes };