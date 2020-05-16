import React from 'react';
import navbar from './Navbar.module.css';

const Navbar = () => {
    return <div className={navbar.nav}>
       <div className={navbar.item}>
           <a>Profile</a>
       </div>
       <div className={`${navbar.item} ${navbar.active}`}>
           <a>Messages</a>
       </div>
       <div className={navbar.item}>
           <a>News</a>
       </div>
       <div className={navbar.item}>
           <a>Music</a>
       </div>
       <div className={navbar.item}>
           <a>Settings</a>
       </div>
    </div>
}

export default Navbar;