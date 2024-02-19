import { Outlet } from 'react-router-dom';

import Subheader from './subheader';


const AboutRoot = () => {
    return (
        <>
            <Subheader />
            <Outlet />
        </>
    )
};

export default AboutRoot;