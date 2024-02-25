/** @jsxImportSource @emotion/react */

//dependencies
import React from 'react';
//components
import CertModal from './CertModal';

//material ui --
import Paper from '@mui/material/Paper';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

//styling
const styles = {
    '.MuiImageListItem-img': {
        borderRadius: 10
    },
    '.MuiImageListItemBar-root': {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
}

const CertCard = ({file, category}) => {
    return (
        <Paper css={[styles?.['.MuiImageListItem-img'], styles]} className='certcard-section' elevation={5}>
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

export default React.memo(CertCard);