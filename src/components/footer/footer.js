/** @jsxImportSource @emotion/react */

// import { css } from '@emotion/react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';


const styles = {
    '.footer-section': {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: '2rem',
        padding: 10,
        border: '1px solid black',
    },
}

const Footer = () => {
    return (
        <section css={[styles?.['.footer-section'], styles]} className='footer-section'>
            <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
            <CalendarMonthIcon />
            <FileCopyIcon />
            <CreditCardIcon />
            <CallIcon />
        </section>
    )
};

export default Footer;