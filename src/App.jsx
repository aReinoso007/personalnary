import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import { AppRoutes } from './routers/routes';

function App() {
  
  return (
   <AuthContextProvider>
    <AppRoutes />
   </AuthContextProvider>
  );
}

export default App;
