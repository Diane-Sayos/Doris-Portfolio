/** @jsxImportSource @emotion/react */

//have to add resume and business card later!!
//update link on github, calendar, email

let resume;
let businessCard;


//material ui
import Paper from '@mui/material/Paper';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FileCopyIcon from '@mui/icons-material/FileCopy';


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
    '.footer-button': {
        color: '#7f5539'
    }
}

const Footer = () => {
    return (
        <Paper className='footer-section' css={[styles?.['.footer-section'], styles]}  elevation={6}>
            <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/doris-sayos-1743b01bb/", "_blank")} className="footer-button" fontSize='medium' />
            <GitHubIcon onClick={() => window.open("https://www.github.com/", "_blank")} className="footer-button" fontSize='medium' />
            <a href="mailto:dorissayos@gmail.com" target="_blank" rel="noreferrer" ><EmailIcon className="footer-button" fontSize='medium' /></a>
            <CalendarMonthIcon onClick={() => window.open("https://calendly.com", "_blank")} className="footer-button" fontSize='medium' />
            <a href={businessCard} download ><CreditCardIcon className="footer-button" fontSize='medium' /></a>
            <a href={resume} download ><FileCopyIcon className="footer-button" fontSize='medium' /></a>
            <a href="tel:+16462706838" target="_blank" rel="noreferrer" ><CallIcon className="footer-button" fontSize='medium' /></a>
        </Paper>
    )
};

export default Footer;