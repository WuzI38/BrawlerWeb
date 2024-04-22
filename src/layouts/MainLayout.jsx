import React, {useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
    useEffect(() => {
        document.body.classList.add('bg-background');

        const navbar = document.getElementById('navbar');
        if (navbar) {
          document.documentElement.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
        }
    
        return () => {
          document.body.classList.remove('bg-background');
        };
      }, []);

    return (
      <div className="flex flex-col min-h-screen">
        <Navbar/>
          <div className="flex-grow outlet-padding">
              <Outlet />
          </div>
        <Footer />
      </div>
    );
};

export default Layout;