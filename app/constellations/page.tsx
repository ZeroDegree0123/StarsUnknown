import React from 'react'
import Link from 'next/link'
import axios from 'axios'

import ListCard from '../components/ListCard/ListCard';


interface Constellation {
    id: number;
    name: string;
    image: string;
}


const ConstellationsPage = async () => {
    const res = await axios.get('http://localhost:3000/api/constellations');
    const constellations: Constellation[] = await res.data;

    return (
        <main className='flex justify-center items-center flex-col'>
            <h1 className='text-4xl p-10 text-quarternary-color'>CONSTELLATIONS</h1>
            {/* <Link href="constellations/new" className='p-2 m-5'>New Constellation</Link> */}
            {constellations.map(({ id, name, image }: Constellation) => (
                <ListCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    url='constellations'
                />
            ))}
        </main>
    )
}

export default ConstellationsPage