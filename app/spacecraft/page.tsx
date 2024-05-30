import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import ListCard from '../components/ListCard/ListCard';

interface Spacecraft {
    id: number
    name: string
    image: string
}

const SpaceCraftPage = async () => {
    const res = await axios.get('http://localhost:3000/api/spacecraft')
    const spacecraft: Spacecraft[] = await res.data;

    return (
        <main className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl p-16 text-quarternary-color'>SPACECRAFT</h1>
            {/* <Link href="/spacecraft/new" className='p-2 m-5'>Create A Spacecraft</Link> */}
            {spacecraft.map(({ id, name, image }: Spacecraft) => (
                <ListCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    url='spacecraft'
                />
            ))}
        </main>
    )
}

export default SpaceCraftPage
