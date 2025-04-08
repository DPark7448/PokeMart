import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav>
                    <h1>PokeTrade</h1>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>&copy; 2025 PokeTrade. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;