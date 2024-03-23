import React from 'react'

interface Planet {
    id: number
    name: string
    image: string
    type: string
    size: string
    distance: string
    description: string
}

interface Props {
    params: { id: number }
}

const PlanetPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://localhost:3000/api/planets/${id}`, { cache: 'no-store' });
    const planet: Planet = await res.json();

    return (
        <main>
            <h1>Planet {id}</h1>
            <p>{planet.name}</p>
            <p>{planet.description}</p>
        </main>
    )
}

export default PlanetPage