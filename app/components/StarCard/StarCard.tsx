import React from 'react';
import Link from 'next/link'

interface Star {
    id: number
    name: string
    image: string
    description: string
}

const StarCard = ({ id, name, image, description }: Star) => {
    return (
        <div className='flex flex-row items-center justify-evenly border border-white m-4 p-4 w-3/4'>
            <p>{image}</p>
            <h1 className='m-0'>{name}</h1>
            <Link href={`/stars/${id}`}>To Star</Link>
        </div>
    )
}

export default StarCard