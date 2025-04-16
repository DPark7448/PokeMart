import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router"; //to redirect
import { useAtom } from "jotai";
import { loggedInAtom } from "../store/loginAtom";
import { favoritesAtom } from "store/favoritesAtom";
import { searchHistoryAtom } from "store/searchHistoryAtom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "components/Layout";
import RouteGuard from "components/RouteGuard";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useAtom(loggedInAtom);
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoggedIn(false);
    } else setLoggedIn(true);
  }, [router]);

  useEffect(() => {
    async function fetchDataOne() {
      const favList = localStorage.getItem("favorites");
      const token = localStorage.getItem("token");
      if (!favList) {
        localStorage.setItem("favorites", "[]");
      } else if (token) {
        const data = await fetch("/api/user/get/favorites", {
          headers: { authorization: token },
        }).then((res) => res.json());
        setFavorites(data);
        localStorage.setItem("favorites", JSON.stringify(data));
      }
    }
    fetchDataOne();
  }, [router]);

  useEffect(() => {
    async function fetchDataTwo() {
      const hisList = localStorage.getItem("history");
      const token = localStorage.getItem("token");
      if (!hisList) {
        localStorage.setItem("history", "[]");
      } else if (token) {
        const data = await fetch("/api/user/get/history", {
          headers: { authorization: token },
        }).then((res) => res.json());
        setSearchHistory(data);
        localStorage.setItem("history", JSON.stringify(data));
      }
    }
    fetchDataTwo();
  }, [router]);

  return (
    <>
      <RouteGuard>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RouteGuard>
    </>
  );
}

export default MyApp;
