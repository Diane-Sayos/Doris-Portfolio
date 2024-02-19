/** @jsxImportSource @emotion/react */

//dependencies
// import { css } from '@emotion/react';

//components


//material ui
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

//files


//create cards for certifications --- input image && Cert Title && School
//create modal when clicked --- input bigger picture of the certificate

const styles = {
    '.main-section': {
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'row wrap',
        border: '1px solid black',
        padding: 10,
    }
};

const CertCard = ({certificate}) => {
    return (
        <section className='certcard-section'>
            <img src={certificate.picture} />
            <h3>{certificate.title}</h3>
            <p>{certificate.school}</p>
        </section>
    )
};

export default CertCard;