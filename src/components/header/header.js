/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import Contact from '../contact/contact';

import Avatar from '@mui/material/Avatar';

import sample from '../../images/catpic.jpeg';


const styles = {
    '.header-section': {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'white',
    },
    '.header': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    '.navbar-section': {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '1rem',
        alignItems: 'center',
    },
    '.header-avatar-container': {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '1rem',
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
        padding: '5px',
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
        <section css={[styles?.['.header-section'], styles]} className='header-section'>
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
        </section>
    )
};

export default Header;