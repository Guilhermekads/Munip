import './App.css';
import { Route, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages';
import SignupPage from './pages/signup';
import Comingsonpage from './pages/comingson';
import Login from './pages/login';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'signup',
    element: <SignupPage/>
  },
  {
    path: '/coming-son',
    element: <Comingsonpage/>
  },
  {
    path: '/login',
    element: <Login/>
  }
])


function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
