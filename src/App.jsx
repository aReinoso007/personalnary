import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';

function App() {
  
  const router = createBrowserRouter([
    { path: '/', component: Home, element: <Home /> },
    { path: '/about', component: About, element: <About /> },
    { path: '/login', component: About, element: <Login /> },
  ]);
  

  return (
   <AuthContextProvider>
    <RouterProvider router={router} />
   </AuthContextProvider>
  );
}

export default App;
