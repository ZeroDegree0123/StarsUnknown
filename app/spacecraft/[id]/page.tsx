import React from 'react'

interface Spacecraft {
    id: number
    name: string
    image: string
    crew: string
    nation: string
    yearBuilt: string
    description: string
}

interface Props {
    params: { id: number }
}

const SpacecraftDetailsPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://localhost:3000/api/spacecraft/${id}`, { cache: 'no-store' });
    const spacecraft: Spacecraft = await res.json();

    return (
        <main>
            <h1>Spacecraft {id}</h1>
            <p>{spacecraft.name}</p>
            <p>{spacecraft.description}</p>
        </main>
    )
}

export default SpacecraftDetailsPage