// 'use client'
// import React, { useState, useEffect } from 'react'
import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import ConstellationCard from '../components/ConstellationCard/ConstellationCard';

interface Constellation {
    id: number;
    name: string;
    description: string;
    distance: string;
}

const ConstellationsPage = async () => {
    const res = await axios.get('http://localhost:3000/api/constellations');
    const constellations: Constellation[] = await res.data;

    return (
        <main className='flex justify-center items-center flex-col'>
            <div>ConstellationPage</div>
            <Link href="constellations/new" className='p-2 m-5'>New Constellation</Link>
            {constellations.map(({ id, name, description, distance }: Constellation) => (
                <ConstellationCard
                    key={id}
                    id={id}
                    name={name}
                    description={description}
                    distance={distance}
                />
            ))}
        </main>
    )
}

export default ConstellationsPage