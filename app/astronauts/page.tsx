import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import AstronautsCard from '../components/AstronautsCard/AstronautsCard';

interface Astronaut {
    id: number
    name: string
    image: string
}

const AstronautsPage = async () => {
    const res = await axios.get('http://localhost:3000/api/astronauts')
    const astronauts: Astronaut[] = await res.data;

    return (
        <main className='flex justify-center items-center flex-col'>
            <h1>AstronautsPage</h1>
            <Link href="/astronauts/new" className='p-2 m-5'>Create A New Astronaut</Link>
            {astronauts.map(({ id, name, image }: Astronaut) => (
                <AstronautsCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                />
            ))}
        </main>
    )
}

export default AstronautsPage