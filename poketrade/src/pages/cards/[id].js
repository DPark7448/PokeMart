import { useRouter } from 'next/router';

export default function IDPage() {
    const router = useRouter();
    const { id } = router.query;

    return (
      <div className="container mt-4">
        <h1>Dynamic ID: {id}</h1>
        <p>This is a basic ID page.</p>
      </div>
    );
}