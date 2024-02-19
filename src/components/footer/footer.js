/** @jsxImportSource @emotion/react */

import Paper from '@mui/material/Paper';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FileCopyIcon from '@mui/icons-material/FileCopy';

let resume; //have to add resume and business card later!!
let businessCard;


const styles = {
    '.footer-section': {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderTopLeftRadius: '1rem 1rem',
        borderTopRightRadius: '1rem 1rem',
        padding: '0.5rem 0',
    },
}

const Footer = () => {
    return (
        <Paper className='footer-section' css={[styles?.['.footer-section'], styles]}  elevation={6}>
            <LinkedInIcon fontSize='medium' onClick={() => window.open("https://www.linkedin.com/in/doris-sayos-1743b01bb/", "_blank")} />
            <GitHubIcon fontSize='medium' />
            <EmailIcon fontSize='medium' />
            <CalendarMonthIcon fontSize='medium' />
            <a href={businessCard} download className="footer-button"><CreditCardIcon fontSize='medium' /></a>
            <a href={resume} download className="footer-button"><FileCopyIcon fontSize='medium' /></a>
            <CallIcon fontSize='medium' />
        </Paper>
    )
};

export default Footer;