import '../styles/globals.css'; 
import { useEffect } from 'react';

function App({ Component, pageProps }) {
    useEffect(() => {
        fetch("api/connect");
    },[])

        return <Component {...pageProps} />;
}

export default App;
