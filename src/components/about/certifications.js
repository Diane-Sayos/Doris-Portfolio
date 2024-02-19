/** @jsxImportSource @emotion/react */

// import { css } from '@emotion/react';

const styles = {
    '.main-section': {
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'row wrap',
        border: '1px solid black',
        padding: 10,
    }
}

const Certifications = () => {
    return (
            <section css={[styles?.['.main-section'], styles]} className='certification-section'>
                <h2>CERTIFICATIONS</h2>
            </section>
    )
};

export default Certifications;