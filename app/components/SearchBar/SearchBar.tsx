'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter()

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();

        const encodedSearch = encodeURI(searchQuery);
        router.push(`/search?q=${encodedSearch}`)

        console.log(encodedSearch)
    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <input type="text" value={searchQuery} onChange={(evt) => setSearchQuery(evt.target.value)} />

            </form>
        </>
    )
}

export default SearchBar