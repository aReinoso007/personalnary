import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  
  const router = createBrowserRouter([
    { path: '/', component: Home, element: <Home /> },
    { path: '/about', component: About, element: <About /> },
  ]);
  

  return (
   <RouterProvider router={router} />
  );
}

export default App;
