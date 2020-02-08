import React from 'react';


export const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper indigo">
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">Netflix</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a class="waves-effect waves-light btn">Agregar Película</a></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}
