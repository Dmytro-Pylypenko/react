import React from 'react';
import { NavLink } from 'react-router-dom';
import head from './Header.module.css'

const Header = () => {
    return <header className={head.header}>
        <img src="https://images.unsplash.com/photo-1573935146153-f6322e84d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
        <div className={head.loginBlock}>
            <NavLink to={'/login'}> Login</NavLink>
        </div>
    </header>
}

export default Header;

