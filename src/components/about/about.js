// /** @jsxImportSource @emotion/react */
// //dependencies
// // import { css } from '@emotion/react';

// //components

// //material ui

// //files

// //this is the fun description for doris with hobbies, soft skills, goal

// const styles = {
//     '.main-section': {
//         margin: '1rem auto',
//         display: 'flex',
//         flexDirection: 'row wrap',
//         border: '1px solid black',
//         padding: 10,
//     },
//     '.about-section': {

//     },
// };


// const About = () => {
//     return (
//         <section css={[styles?.['.main-section'], styles]} className='about-section'>
//             <h2>About</h2>
//         </section>
//     )
// };

// export default About;

import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


import TabPanel from '../reusable/TabPanel';
import Cards from '../reusable/Cards';

import { techstacks, certificates } from './information';


const About = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static">
        <Tabs
          sx={{backgroundColor: '#7f5539'}}
          value={value}
          onChange={handleChange}
          indicatorColor="#ffffff"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="ABOUT" />
          <Tab label="CERTIFICATIONS" />
          <Tab label="TECH STACK" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          About
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Cards files={certificates} category={'certifications'} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Cards files={techstacks} category={'techstack'} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default About;