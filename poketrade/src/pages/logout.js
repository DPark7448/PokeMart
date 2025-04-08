import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LogOut() {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem("token");
    router.push("/");
  }, [router]);
}
