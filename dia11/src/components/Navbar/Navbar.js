import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper indigo">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Netflix</Link>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/addMovie" class="waves-effect waves-light btn">Agregar Película</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}
