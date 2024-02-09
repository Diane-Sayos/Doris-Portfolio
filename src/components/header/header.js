/** @jsxImportSource @emotion/react */

// import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const styles = {
    '.header-section': {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'white',
        border: '1px solid black',
    },
    '.header': {
        width: '100%',
        height: '5rem'
    },
}


const Header = () => {
    return (
        <section css={[styles?.['.header-section'], styles]} className='header-section'>
            <section className='header'>
                <h1>Doris Sayos</h1>
                <p>Data Analyst</p>
            </section>
            <nav className='navbar-section'>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/about' >About</NavLink>
                <NavLink to='/projects' >Projects</NavLink>
                <button>Contact</button>
            </nav>
        </section>
    )
};

export default Header;