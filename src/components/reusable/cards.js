/** @jsxImportSource @emotion/react */

//dependencies
// import { css } from '@emotion/react';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

//components
import CertCard from './CertCard';

//material ui --- 
import ImageList from '@mui/material/ImageList';

//styling
const styles = {
    '.certification-section': {
        textAlign: 'center',
        padding: '1rem 1rem 3rem 1rem'
    },
    '.techstack-section': {
        textAlign: 'center',
        padding: '1rem 1rem 3rem 1rem'
    },
    '.projects-section': {
        textAlign: 'center',
        padding: '1rem 1rem 3rem 1rem'
    },

};
//create cards for certifications --- input image && Cert Title && School
//create modal when clicked --- input bigger picture of the certificate


const Cards = ({files, category}) => {
    const matches = useMediaQuery('(max-width:430px)');
    return (
            <section css={[styles?.[`.${category}-section`], styles]} className={`${category}-section`}>
                <ImageList sx={{ width: '100%', height: '100%'}} cols={`${category === 'techstack' && !matches? 4 : 2}`} gap={10}>
                    {files.map((file, idx) => (
                        <React.Fragment key={idx}>
                            <CertCard file={file} category={category}/>
                        </React.Fragment>
                    ))}
                </ImageList>
            </section>
    )
};

export default Cards;