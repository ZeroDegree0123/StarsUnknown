import React from 'react'

interface Astronaut {
    id: number
    name: string
    image: string
    nation: string
    missions: string
    description: string
}

interface Props {
    params: { id: number }
}

const AstronautPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://localhost:3000/api/astronauts/${id}`, { cache: 'no-store' });

    const astronaut: Astronaut = await res.json();

    return (
        <main>
            <h1>astronaut {id}</h1>
            <p>{astronaut.name}</p>
            <p>{astronaut.description}</p>
        </main>
    )
}

export default AstronautPage