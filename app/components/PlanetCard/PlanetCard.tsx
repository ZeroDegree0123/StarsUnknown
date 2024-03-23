import React from 'react';
import Link from 'next/link';

interface Planet {
    id: number
    name: string
    image: string
}

const PlanetCard = ({ id, name, image }: Planet) => {
    return (
        <div className='flex flex-row items-center justify-evenly border border-white m-4 p-4 w-3/4'>
            <p>{image}</p>
            <h1 className='m-0'>{name}</h1>
            <Link href={`/planets/${id}`}>To Constellation</Link>
        </div>
    )
}

export default PlanetCard