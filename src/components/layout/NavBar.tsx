import React, { FC } from 'react';
import { NavRoute } from '../../types/NavRoute';
import { Link } from 'react-router-dom';

export const Navbar: FC<{ routes: NavRoute[] }> = ({ routes }) => {
    return (
        <header className="App-header">
            <nav>
                {
                    routes.length &&
                    routes.map(({ name, path }) => <Link key={path} to={path}>{name}</Link>)
                }
            </nav>
        </header>
    );
};
