import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import BookingPage from './pages/Booking/BookingPage';
import BookingConfirmation from './pages/Booking/Confirmation';
import OrderOnline from './pages/Order/OrderPage';
//import Contacts from './pages/Contacts';
import { AppProvider } from './context/AppContext';
import { NavProvider } from './context/NavContext';

const App = () => {

  /* ===== Media Queries ===== */
  const noHover = useMediaQuery('(hover: none)')
  const isPortrait = useMediaQuery('(orientation: portrait)')
  const isUnder768 = useMediaQuery('(max-width: 767px)')
  const isUnder1024 = useMediaQuery('(max-width: 1024px)')
  const isUnder1280 = useMediaQuery('(max-width: 1280px)')
  const isUnder1536 = useMediaQuery('(max-width: 1536px)')

  const Layout = () => {
    return (
      <>
        <NavProvider>
          <Navbar />
          <main>
            <AppProvider>
              <Outlet /> {/* This is where child routes will be rendered */}
            </AppProvider>
          </main>
          <Footer />
        </NavProvider>
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
          element: <Menu
            noHover={noHover}
            isPortrait={isPortrait}
            isUnder768={isUnder768}
            isUnder1024={isUnder1024}
            isUnder1280={isUnder1280}
            isUnder1536={isUnder1536}
          />,
        },
        {
          path: 'reservations',
          element: <BookingPage
            noHover={noHover}
            isPortrait={isPortrait}
            isUnder768={isUnder768}
            isUnder1024={isUnder1024}
            isUnder1280={isUnder1280}
            isUnder1536={isUnder1536}
          />,
        },
        {
          path: 'booking-confirmation',
          element: <BookingConfirmation
            noHover={noHover}
            isPortrait={isPortrait}
            isUnder768={isUnder768}
            isUnder1024={isUnder1024}
            isUnder1280={isUnder1280}
            isUnder1536={isUnder1536}
          />,
        },
        {
          path: 'order-online',
          element: <OrderOnline
            noHover={noHover}
            isPortrait={isPortrait}
            isUnder768={isUnder768}
            isUnder1024={isUnder1024}
            isUnder1280={isUnder1280}
            isUnder1536={isUnder1536}
          />,
        },
        /* {
          path: 'contacts',
          element: <Contacts />,
        }, */
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App