import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div /* x-data="{navOpen: false, modalOpen: false}" */>
      <Navbar />
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Using Layout for all routes
    children: [
      {
        index: true, // This will render Home at the root path
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'reservations',
        element: <Reservations />,
      },
      {
        path: 'order-online',
        element: <OrderOnline />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App