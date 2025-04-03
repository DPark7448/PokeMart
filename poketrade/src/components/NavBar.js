import React, { useRef } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';


export default function NavBar() {
  const searchInputRef = useRef(null);
  const router = useRouter();  //to implent the actual search
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">PokeMart</a> */}
        {/* ensures client-side navigation with better performance */}
        <Link className="navbar-brand" href="/">PokeMart</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSearch">
          <form className="d-flex" id="searchForm" onSubmit={(e) => {

            // Add search/filter function
            const handleSearch = (e) =>{
              e.preventDefault();
              const value = searchInputRef.current.value.trim();
              if(value){
                router.push('/seaerch?query=' + value);
              }
            } 

          }}>
            <input className="form-control me-2" type="search" placeholder="Search by name or ID" ref={searchInputRef} aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
