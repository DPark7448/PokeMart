import '../styles/globals.css'; 

function App({ Component, pageProps }) {
    fetch("api/connect")
  return <Component {...pageProps} />;
}

export default App;
