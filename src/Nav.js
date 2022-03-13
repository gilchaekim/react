import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h3>This is Logo</h3>
            <ul>
                <li>
                    <Link to='/'>Main</Link>
                </li>
                <li>
                    <Link to='/about'>Abuot</Link>
                </li>
                <li>
                    <Link to='/info'>Info</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;