import '../styles/globals.css'; 
import mongoose from "mongoose";
function App({ Component, pageProps }) {

    const db = process.env.DB_URI;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

  return <Component {...pageProps} />;
}

export default App;
