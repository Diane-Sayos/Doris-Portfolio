import './App.css';
//main template --- header, main section, footer
import Root from './components/root/root';
//components for main section
import Projects from './components/projects/projects';
import Home from './components/home/home';
//subheader -- navbar for about section
import AboutRoot from './components/about/about-root';
//components for about section
import About from './components/about/about';
import Techstack from './components/about/techstack/techstack';
import Certifications from './components/about/certifications/certifications';

import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> }>
    <Route path='/' element={ <Home /> } />
    <Route path='/about' element={ <AboutRoot /> }>
      <Route path='/about/' element={ <About /> } />
      <Route path='/about/certifications' element={ <Certifications /> } />
      <Route path='/about/techstack' element={ <Techstack /> } />
    </Route>
    <Route path='/projects' element={ <Projects /> } />
  </Route>
));

function App() {
  return (
    <RouterProvider router={ appRouter } />
  );
}

export default App;