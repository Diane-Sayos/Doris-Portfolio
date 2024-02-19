/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import Contact from '../contact/contact';

import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';


import sample from '../../images/catpic.jpeg';


const styles = {
    '.header-section': {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'white',
        borderBottomRightRadius: '1rem 1rem',
        borderBottomLeftRadius: '1rem 1rem',
    },
    '.header': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0 1rem',
    },
    '.navbar-section': {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0,
        alignItems: 'center',
    },
    '.header-avatar-container': {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 0,
    },
    '.avatar-name': {
        margin: 0,
        padding: '5px',
    },
    '.navbar-link': {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 'bolder',
        padding: 5,
        alignSelf: 'center',
        lineHeight: 1.5,
        backgroundColor: 'white',
        fontFamily: "Abel",
        textDecoration: 'none',
        color: '#7f5539',
    },
}


const Header = () => {
    return (
            <Paper css={[styles?.['.header-section'], styles]} className='header-section' elevation={6}>
            <section className='header'>
                <div className='header-avatar-container'>
                <NavLink to='/' ><Avatar alt='Doris Sayos Picture' src={sample} /></NavLink>
                    <h3 css={css`
                        @media (max-width: 480px) {
                            display: none;
                        }
                    `}>
                        <NavLink to='/' className='navbar-link'>DORIS SAYOS</NavLink>
                    </h3>
                </div>
                <nav className='navbar-section'>
                    <NavLink to='/' className='navbar-link'>HOME</NavLink>
                    <NavLink to='/about' className='navbar-link'>ABOUT</NavLink>
                    <NavLink to='/projects' className='navbar-link'>PROJECTS</NavLink>
                    <Contact />
                </nav>
            </section>
            </Paper>
    )
};

export default Header;