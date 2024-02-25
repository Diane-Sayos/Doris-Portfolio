/** @jsxImportSource @emotion/react */

//dependencies
// import { css } from '@emotion/react';
import React from 'react';

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
    return (
            <section css={[styles?.[`.${category}-section`], styles]} className={`${category}-section`}>
                <ImageList sx={{ width: '95%', height: '100%', margin: '0.5rem auto 3rem auto'}} cols={`${category === 'techstack'? 3 : 2}`} gap={10}>
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