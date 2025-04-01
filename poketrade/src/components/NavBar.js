import React, { useRef } from 'react';


export default function NavBar() {
  const searchInputRef = useRef(null);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">PokeMart</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

          <form className="d-flex" id="searchForm" onSubmit={(e) => {
            e.preventDefault();
            const value = searchInputRef.current.value;
            console.log('Search for:', value);
            
            // Add search/filter function 
          }}>
            <input className="form-control me-2" type="search" placeholder="Search by name or ID" ref={searchInputRef} aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
      </div>
    </nav>
  );
}
