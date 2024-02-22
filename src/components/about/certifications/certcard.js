/** @jsxImportSource @emotion/react */

//dependencies

//components
import CertModal from './certmodal';

//material ui --
import Paper from '@mui/material/Paper';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

//files

//styling


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
                        <CertModal certificate={certificate} />
                    }
                />
            </ImageListItem>
        </Paper>
    )
};

export default CertCard;