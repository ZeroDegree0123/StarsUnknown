import Link from 'next/link'
import React from 'react'

interface Constellation {
    id: number
    name: string
    image: string
    description: string
}

const ConstellationCard = ({ id, name, image, description }: Constellation) => {
    return (
        <div className='flex flex-row items-center justify-evenly border border-white m-4 p-4 w-3/4'>
            <p>{image}</p>
            <h1 className='m-0'>{name}</h1>
            {/* <p>{description}</p> */}
            <Link href={`/constellations/${id}`}>To Constellation</Link>
        </div>
    )
}

export default ConstellationCard