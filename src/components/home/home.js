/** @jsxImportSource @emotion/react */

// import { css } from '@emotion/react';

const styles = {
    '.main-section': {
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row wrap',
        height: '84vh',
        border: '1px solid black',
    }
}

const Home = () => {
    return (
            <section css={[styles?.['.main-section'], styles]} className='main-section'>
                <h2>Home</h2>
            </section>
    )
};

export default Home;