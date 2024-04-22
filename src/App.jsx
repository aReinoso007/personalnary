import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://znkpacfqnuhcosliyayx.supabase.co', process.env.REACT_APP_SUPABASE_ANON_KEY);

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
