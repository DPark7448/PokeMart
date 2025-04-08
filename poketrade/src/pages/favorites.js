//src/pages/favorites.js
import { useRouter } from "next/router"; //to redirect
import { useAtom } from "jotai";
import { loggedInAtom } from "../store/loginAtom";
import { useEffect } from "react";
export default function FavoritesPage() {
  const router = useRouter();
  const [loggedIn] = useAtom(loggedInAtom);
  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    }
  }, [loggedIn, router]);
  return (
    <>
      <div className="container mt-4">
        <h1>Favorite</h1>
        <p>This is a basic Favorite page.</p>
      </div>
    </>
  );
}
