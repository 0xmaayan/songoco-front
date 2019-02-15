import React from "react";
// components
import Header from './Header';
import Footer from './Footer';


export default ({ children }) => (
  <div>

    <Header />

    {children}

    <Footer />
  </div>
)
