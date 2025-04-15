import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router"; //to redirect
import { useAtom } from "jotai";
import { loggedInAtom } from "../store/loginAtom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "components/Layout";
import RouteGuard from "components/RouteGuard";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useAtom(loggedInAtom);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoggedIn(false);
    } else setLoggedIn(true);
  }, [router]);

  return (
    <>
      <NavBar />
      <RouteGuard>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RouteGuard>
    </>
  );
}

export default MyApp;
