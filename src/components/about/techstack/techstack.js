/** @jsxImportSource @emotion/react */

//dependencies
// import { css } from '@emotion/react';

//components

//material ui

//files

//create cards for tech stacks ---- make sure to add the name of each tech stack

const styles = {
    '.main-section': {
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'row wrap',
        border: '1px solid black',
        padding: 10,
    },
    '.techstack-section': {

    },
}

const Techstack = () => {
    return (
            <section css={[styles?.['.main-section'], styles]} className='techstack-section'>
                <h2>techstack</h2>
            </section>
    )
};

export default Techstack;