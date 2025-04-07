import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router"; //to redirect
import { useAtom } from "jotai";
import { loggedInAtom } from "@/store/loginAtom";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useAtom(loggedInAtom);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoggedIn(false);
    }
  }, [router]);

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
