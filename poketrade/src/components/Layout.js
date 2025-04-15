import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 PokeTrade. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
