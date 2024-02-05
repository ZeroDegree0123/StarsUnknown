import React from 'react'

interface Constellation {
    id: number
    name: string
    description: string
    stars: string
}

interface Props {
    params: { id: number }
}

const ContellationPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://localhost:3000/api/constellations/${id}`, { cache: 'no-store' });

    const constellation: Constellation = await res.json()

    return (
        <main>
            <h1>Constellation {id}</h1>
            <p>{constellation.name}</p>
            <p>{constellation.description}</p>
        </main>
    )
}

export default ContellationPage