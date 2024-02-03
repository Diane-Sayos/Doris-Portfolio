import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <section className='header-section'>
            <section className='header'>
                <h1>Doris Sayos</h1>
                <p>Data Analyst</p>
            </section>
            <nav className='navbar-section'>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/about' >About</NavLink>
                <NavLink to='/projects' >Projects</NavLink>
            </nav>
        </section>
    )
};

export default Header;