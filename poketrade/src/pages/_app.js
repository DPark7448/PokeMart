import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
