import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import './App.css';
import { NavRoute } from './types/NavRoute';
import { ColorsExercisePage } from './components/colors/ColorsExercisePage';
import { OperationsExercisePage } from './components/operations/OperationsExercisePage';
import { Navbar } from './components/layout/NavBar';

function App() {
    const [routes] = useState<NavRoute[]>([
        {
            path: '/ejercicio1',
            name: 'Ejercicio 1',
            component: ColorsExercisePage
        },
        {
            path: '/ejercicio2',
            name: 'Ejercicio 2',
            component: OperationsExercisePage
        },
    ]);

    return (
        <Router>
            <>
                <Navbar routes={routes} />
                <Switch>
                    <Redirect exact from="/" to="/ejercicio1" />
                    {
                        routes.map(({ path, component }) => (
                            <Route key={path} path={path} component={component} />
                        ))
                    }
                </Switch>
            </>
        </Router>
    );
}

export default App;
