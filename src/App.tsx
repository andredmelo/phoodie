import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import BookingPage from './pages/Booking/BookingPage';
import OrderOnline from './pages/Order/OrderPage';
//import Contacts from './pages/Contacts';
import Footer from './layouts/Footer';
import { AppProvider } from './context/AppContext';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <AppProvider>
          <Outlet /> {/* This is where child routes will be rendered */}
        </AppProvider>
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
        element: <BookingPage />,
      },
      {
        path: 'order-online',
        element: <OrderOnline />,
      },
      /* {
        path: 'contacts',
        element: <Contacts />,
      }, */
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App