import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import ListCard from '../components/ListCard/ListCard';

interface Planet {
    id: number;
    name: string;
    image: string;
}

const PlanetsPage = async () => {
    const res = await axios.get('http://localhost:3000/api/planets');
    const planets: Planet[] = await res.data;

    return (
        <main className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl my-10 p-16 text-quarternary-color'>PLANETS</h1>
            {/* <Link href="planets/new">New Planet</Link> */}
            {planets.map(({ id, name, image }: Planet) => (
                <ListCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    url='planets'
                />
            ))}
        </main>
    )
}

export default PlanetsPage