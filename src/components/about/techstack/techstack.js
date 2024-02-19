/** @jsxImportSource @emotion/react */

// import { css } from '@emotion/react';

//create cards for tech stacks ---- make sure to add the name of each tech stack

const styles = {
    '.main-section': {
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'row wrap',
        border: '1px solid black',
        padding: 10,
    }
}

const Techstack = () => {
    return (
            <section css={[styles?.['.main-section'], styles]} className='techstack-section'>
                <h2>Home</h2>
            </section>
    )
};

export default Techstack;