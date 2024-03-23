import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import SpacecraftCard from '../components/SpacecraftCard/SpacecraftCard';

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
            <div>StarsPage</div>
            <Link href="/spacecraft/new" className='p-2 m-5'>Create A Spacecraft</Link>
            {spacecraft.map(({ id, name, image }: Spacecraft) => (
                <SpacecraftCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                />
            ))}
        </main>
    )
}

export default SpaceCraftPage
