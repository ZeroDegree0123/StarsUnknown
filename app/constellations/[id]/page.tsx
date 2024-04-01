import React from 'react'

interface Constellation {
    id: number
    name: string
    description: string
    stars: string
    image: string
}

interface Props {
    params: { id: number }
}

const ContellationPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://localhost:3000/api/constellations/${id}`, { cache: 'no-store' });

    const constellation: Constellation = await res.json()

    return (
        <main>
            <img src={constellation.image} alt="" />
            <h1>{constellation.name}</h1>
            <p>{constellation.description}</p>
        </main>
    )
}

export default ContellationPage