import React from 'react'

interface Spacecraft {
    id: number
    name: string
    image: string
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
            <img src={spacecraft.image} alt="" />
            <h1>{spacecraft.name}</h1>
            <p>{spacecraft.description}</p>
        </main>
    )
}

export default SpacecraftDetailsPage