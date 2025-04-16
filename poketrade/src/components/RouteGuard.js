//component/RouteGuard.js
import { useEffect } from "react";
import { useRouter } from "next/router"; 
import { useAtom } from "jotai";
import { loggedInAtom } from "../store/loginAtom";
import { favoritesAtom } from "../store/favoritesAtom";
import { searchHistoryAtom } from "../store/searchHistoryAtom";
import { getFavorites, getHistory } from "../utils/userData"

const PUBLIC_PATHS = ["/login", "/register", "/"];

export default function RouteGuard(props) {
    const router = useRouter();
    const [loggedIn] = useAtom(loggedInAtom); //to check auth
    const [, setFavorites] = useAtom(favoritesAtom);
    const [, setSearchHistory] = useAtom(searchHistoryAtom);

    //async function to get data from local storage and set it in the atom
    async function updateAtoms() {
        setFavorites(await getFavorites());
        setSearchHistory(await getHistory());
      }
    useEffect(() => {
        updateAtoms(); 

        
       const isProtected = PUBLIC_PATHS.includes(router.pathname) && loggedIn;
        if (isProtected && !loggedIn) {
            router.push("/"); //redirect to home if logged in and trying to access public page
        }
    }, [router.pathname, loggedIn]); //run when path changes or user logs in/out
    return <>{props.children}</>
}