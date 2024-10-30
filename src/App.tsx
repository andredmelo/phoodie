import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import Contacts from './pages/Contacts';
import Footer from './layouts/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      <Footer />
    </>
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