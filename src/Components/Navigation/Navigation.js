import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes,faBars} from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';
import {Link, NavLink } from 'react-router-dom';
import {NavData} from './NavData';

const Navigation = () => {
    const [menuBar, setMenuBar] =useState(false);
    const showMenuBar = () => {setMenuBar(!menuBar)};

    return (    
        <>  
            <div className='sideNav'>
            <ul >
                {
                    NavData.map((item,index) => {
                        return (
                            <li key={index} className='iconBox'>
                                <NavLink exact to={item.path} activeClassName='side-nav-active'>
                                    {item.icon}
                                    <h2>{item.title}</h2>
                                </NavLink>
                            </li>
                        )
                    })

                }
            </ul>
        </div>

        <div className='mobile-menu'>
            <div className='menu-bar'>
                <h3>Obaidur Rahman</h3>
                <Link to='#' className='menubars'>
                    <FontAwesomeIcon icon={faBars} onClick={showMenuBar}/>
                </Link>
            </div>
            <nav className={menuBar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showMenuBar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menubars'>
                            <FontAwesomeIcon icon={faTimes}/>
                        </Link>
                    </li>
                    {
                        NavData.map((item,index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <NavLink exact to={item.path} activeStyle={{color:'#72b626'}}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
        </>
    );
};

export default Navigation;