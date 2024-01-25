// 'use client'
// import React, { useState, useEffect } from 'react'
import React from 'react'
import Link from 'next/link'
import axios from 'axios'

interface Constellation {
    id: number;
    name: string;
    description: string;
    distance: string;
}

const ConstellationsPage = async () => {

    // **** CLIENT SIDE RENDERING ****
    // const [data, setData] = useState<Constellation[]>([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('/api/constellations');
    //             const result: Constellation[] = await response.json();
    //             setData(result);
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     fetchData();
    // }, [])
    // **** CLIENT SIDE RENDERING ****

    // const res = await fetch('/api/constellations')
    // const constellations: Constellation[] = await res.json();
    // const res = axios.get('/api/constellations')
    return (
        <main className='flex justify-center items-center flex-col'>
            <div>ConstellationPage</div>
            <Link href="constellations/new" className='p-2 m-5'>New Constellation</Link>
            {/* {constellations.map(({ id, name, description, distance }: Constellation) => <div key={id}>
                <p>{name}</p>
                <p>{description}</p>
                <p>{distance}</p>
            </div>)} */}

            {/* 
            CLIENT SIDE RENDERING 
                {JSON.stringify(data, null, 2)} 
            CLIENT SIDE RENDERING 
            */}
        </main>
    )
}

export default ConstellationsPage