import React, { useRef } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const value = searchInputRef.current.value.trim();
    if (value) {
      router.push(`/search?query=${encodeURIComponent(value)}`);
    }
  };

  return (
    <form className="d-flex" onSubmit={handleSearch} style={{ width: '400px' }}>
      <input
        className="form-control"
        type="search"
        placeholder="Search for cards!"
        ref={searchInputRef}
      />
      <button className="btn btn-outline-secondary ms-2 px-3" type="submit">
        Clear
      </button>
    </form>
  );
}
