import React from 'react';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className='absolute w-full h-full flex flex-col'>
    <div className='flex-grow'>{children}</div>
    <Footer />
  </div>
);

export default Layout;
