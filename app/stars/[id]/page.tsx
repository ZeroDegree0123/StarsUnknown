import React from 'react'

interface Star {
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

const StarPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://localhost:3000/api/stars/${id}`, { cache: 'no-store' });

    const star: Star = await res.json();

    return (
        <main>
            <h1>Star {id}</h1>
            <p>{star.name}</p>
            <p>{star.description}</p>
        </main>
    )
}

export default StarPage