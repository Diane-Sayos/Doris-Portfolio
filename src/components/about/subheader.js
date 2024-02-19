/** @jsxImportSource @emotion/react */

//dependencies
import { useState } from 'react';
// import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

//components


//material ui
import Paper from '@mui/material/Paper';

//files


const styles = {
    '.header-section': {
        position: 'sticky',
        top: '1rem',
        zIndex: 100,
        backgroundColor: 'white',
        borderBottomRightRadius: '1rem 0.5rem',
        borderBottomLeftRadius: '1rem 0.5rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '0.5rem 0.5rem',
    },
    '.navbar-section': {
        padding: 0,
        alignItems: 'center',
    },
    '.navbar-link': {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: 5,
        alignSelf: 'center',
        lineHeight: 1.5,
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


const Subheader = () => {
    const [activeNav, setActiveNav] = useState('/');

    return (
        <Paper css={[styles?.['.header-section'], styles]} className='header-section' elevation={6}>
            <nav className='navbar-section'>
                <NavLink to='/about' onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'navbar-link-selected' : 'navbar-link'}>ABOUT</NavLink>
                <NavLink to='/about/certifications' onClick={() => setActiveNav('/certifications')} className={activeNav === '/certifications' ? 'navbar-link-selected' : 'navbar-link'}>CERTIFICATIONS</NavLink>
                <NavLink to='/about/techstack' onClick={() => setActiveNav('/techstack')} className={activeNav === '/techstack' ? 'navbar-link-selected' : 'navbar-link'}>TECH STACK</NavLink>
            </nav>
        </Paper>
    )
};

export default Subheader;