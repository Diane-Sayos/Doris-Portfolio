/** @jsxImportSource @emotion/react */

//dependencies
// import { css } from '@emotion/react';

//components


//material ui --
import Paper from '@mui/material/Paper';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

//files


//create cards for certifications --- input image && Cert Title && School
//create modal when INFO ICON || IMAGE is clicked --- input bigger picture of the certificate

// const styles = {
//     '.certcard-section': {

//     }
// };

const CertCard = ({certificate}) => {
    return (
        <Paper className='certcard-section' elevation={5}>
            <ImageListItem key={certificate.title} cols={2}>
                <img
                    srcSet={`${certificate.picture}?w=248&h=144fit=crop&auto=format&dpr=2 2x`}
                    src={`${certificate.picture}?w=248&fit=crop&auto=format`}
                    alt={certificate.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={certificate.title}
                    subtitle={certificate.school}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`Info about ${certificate.title}.`}
                        >
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </ImageListItem>
        </Paper>
    )
};

export default CertCard;