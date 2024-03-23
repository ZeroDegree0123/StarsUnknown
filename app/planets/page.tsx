import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import PlanetCard from '../components/PlanetCard/PlanetCard';

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
            <h1>Planets Page</h1>
            <Link href="planets/new">New Planet</Link>
            {planets.map(({ id, name, image }: Planet) => (
                <PlanetCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                />
            ))}
        </main>
    )
}

export default PlanetsPage