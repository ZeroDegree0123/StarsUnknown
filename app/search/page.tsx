'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react';



const SearchPage = async () => {

    const search = useSearchParams();
    const searchQuery = search ? search.get("q") : null;

    const encodedSearch = encodeURI(searchQuery || '');
    const response = await fetch(`http://localhost:3000/api/search/${encodedSearch}`, { cache: 'no-store' })

    console.log(response)
    // console.log("search Params", encodedSearch);
    return (
        <div>Search Page</div>
    )
}

export default SearchPage