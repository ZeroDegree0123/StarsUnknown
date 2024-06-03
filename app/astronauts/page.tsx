import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import ListCard from '../components/ListCard/ListCard';

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
            <h1 className='text-3xl my-10 p-16 text-quarternary-color'>ASTRONAUTS</h1>
            {/* <Link href="/astronauts/new" className='p-2 m-5'>Create A New Astronaut</Link> */}
            {astronauts.map(({ id, name, image }: Astronaut) => (
                <ListCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    url='astronauts'
                />
            ))}
        </main>
    )
}

export default AstronautsPage