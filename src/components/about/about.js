/** @jsxImportSource @emotion/react */

// import { css } from '@emotion/react';

//this is the fun description for doris with hobbies, soft skills, goal

const styles = {
    '.main-section': {
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'row wrap',
        border: '1px solid black',
        padding: 10,
    },
    '.about-section': {

    },
};


const About = () => {
    return (
        <section css={[styles?.['.main-section'], styles]} className='about-section'>
            <h2>About</h2>
        </section>
    )
};

export default About;