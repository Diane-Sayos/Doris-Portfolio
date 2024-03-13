import './App.css';
//main template --- header, main section, footer
import Root from './components/root';
//components for main section
import Projects from './components/projects/projects';
import Home from './components/home';
//components for about section
import About from './components/about/about';

import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> }>
    <Route path='/' element={ <Home /> } />
    <Route path='/about' element={ <About /> } />
    <Route path='/projects' element={ <Projects /> } />
  </Route>
));

function App() {
  return (
    <RouterProvider router={ appRouter } />
  );
}

export default App;

