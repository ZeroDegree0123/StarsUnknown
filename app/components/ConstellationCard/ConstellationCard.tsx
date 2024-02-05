import Link from 'next/link'
import React from 'react'

interface Constellation {
    id: number
    name: string
    description: string
}

const ConstellationCard = ({ id, name, description }: Constellation) => {
    return (
        <div className='border border-white m-4 p-4 w-3/4'>
            <h1>{name} {id}</h1>
            <p>{description}</p>
            <Link href={`/constellations/${id}`}>To Constellation</Link>
        </div>
    )
}

export default ConstellationCard