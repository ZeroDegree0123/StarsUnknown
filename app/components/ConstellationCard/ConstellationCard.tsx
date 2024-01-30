import Link from 'next/link'
import React from 'react'

interface Constellation {
    id: number
    name: string
    description: string
    distance: string
}

const ConstellationCard = ({ id, name, description, distance }: Constellation) => {
    return (
        <div>
            <h1>{name} {id}</h1>
            <p>{description}</p>
            <p>{distance}</p>
            <Link href={`/constellations/${id}`}>To Constellation</Link>
        </div>
    )
}

export default ConstellationCard