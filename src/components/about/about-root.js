//dependencies
import { Outlet } from 'react-router-dom';
//components
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