import Link from "next/link";

export default function ErrorPage() {
    return (
      <div className="container mt-4 text-center">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        <Link href="/" className="btn btn-primary">
        Go Back Home
        </Link>
      </p>
      </div>
    );
  }