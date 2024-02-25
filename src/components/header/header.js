/** @jsxImportSource @emotion/react */

//dependencies
import { useState } from 'react';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

//components
import Contact from '../contact';

//material ui
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

//files
import sample from './catpic.jpeg';


const styles = {
    '.header-section': {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0.5rem',
        height: '3rem',
        borderRadius: 0
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
        padding: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
        textDecoration: 'none',
        color: '#7f5539',
    },
    '.navbar-link-selected': {
        backgroundColor: '#7f5539',
        color: 'white',
        textDecoration: 'none',
        borderRadius: 5,
        padding: 5,
        fontWeight: 'bolder',
    }
}


const Header = () => {
    const [activeNav, setActiveNav] = useState('/');

    return (
        <Paper css={[styles?.['.header-section'], styles]} className='header-section' elevation={6}>
            <div className='header-avatar-container'>
                <NavLink to='/' onClick={() => setActiveNav('/')} ><Avatar alt='Doris Sayos Picture' src={sample} /></NavLink>
                <h3 css={css`
                    @media (max-width: 480px) {
                        display: none;
                    }
                `}>
                    <NavLink to='/' onClick={() => setActiveNav('/')} className='navbar-link'>DORIS SAYOS</NavLink>
                </h3>
            </div>
            <nav className='navbar-section'>
                <NavLink to='/' onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'navbar-link-selected' : 'navbar-link'}>HOME</NavLink>
                <NavLink to='/about' onClick={() => setActiveNav('/about')} className={activeNav === '/about' ? 'navbar-link-selected' : 'navbar-link'}>ABOUT</NavLink>
                <NavLink to='/projects' onClick={() => setActiveNav('/projects')} className={activeNav === '/projects' ? 'navbar-link-selected' : 'navbar-link'}>PROJECTS</NavLink>
                <Contact />
            </nav>
        </Paper>
    )
};

export default Header;