import { Outlet } from 'react-router-dom';

/** @jsx jsx */
import { jsx, css, Global, ClassNames } from '@emotion/react'


import Header from '../header/header';
import Footer from '../footer/footer';


const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};

export default Root;