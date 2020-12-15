import React from 'react';
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import  LanguageIcon  from '@material-ui/icons/Language';
import  ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
          <Link to='/'>
                <img 
                className="navbar-icon"
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=""/>
                 </Link>
                <div className="navbar-center">
                    <input type="text"
                    />
                     <SearchIcon/>
                </div>
                <div className="navbar-right">
                    <p>Become a host</p>
                    <LanguageIcon/>
                    <ExpandMoreIcon/>
                    <Avatar/>
                </div>
        </div>
    );
};

export default Navbar;