/** @jsxImportSource @emotion/react */

//dependencies

//components
import CertModal from './certmodal';

//material ui --
import Paper from '@mui/material/Paper';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


const CertCard = ({file}) => {

    return (
        <Paper className='certcard-section' elevation={5}>
            <ImageListItem key={file.title} cols={2}>
                <img
                    srcSet={`${file.picture}?w=248&h=144fit=crop&auto=format&dpr=2 2x`}
                    src={`${file.picture}?w=248&fit=crop&auto=format`}
                    alt={file.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={file.title}
                    subtitle={file.subtitle}
                    actionIcon={
                        <CertModal file={file} />
                    }
                />
            </ImageListItem>
        </Paper>
    )
};

export default CertCard;