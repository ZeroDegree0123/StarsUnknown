import React from 'react';
import Link from 'next/link';
import axios from 'axios';

import PlanetCard from '../components/PlanetCard/PlanetCard'

interface Planet {
    id: number
    name: string
    image: string
    description: string
    type: string
    size: string
}

const PlanetsPage = async () => {
    const res = await axios.get('http://localhost:3000/api/planets');
    const planets: Planet[] = await res.data;

    return (
        <main className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl p-10 text-quarternary-color'>PLANETS</h1>
            {/* <Link href="planets/new">New Planet</Link> */}
            {planets.map(({ id, name, image, description, type, size }: Planet) => (
                <PlanetCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    description={description}
                    type={type}
                    size={size}
                    url='planets'
                />
            ))}
        </main>
    )
}

export default PlanetsPage