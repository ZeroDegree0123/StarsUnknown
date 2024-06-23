import React from 'react';
import Link from 'next/link';

interface Category {
    id: number
    name: string
    image: string
    url: string
}

const ListCard = ({ id, name, image, url }: Category) => {
    return (
        <div className='flex flex-row items-center justify-between m-4 p-4 w-3/4 shadow-lg bg-white'>
            <img className='w-1/4 h-1/4 shadow-sm' src={`${image}.png`} alt="" />
            <div className='flex flex-col items-end px-10'>
                <h1 className='m-0 text-primary-color'>{name}</h1>
                <Link className='underline text-primary-color' href={`/${url}/${id}`}>To {name}</Link>
            </div>
        </div>
    )
}

export default ListCard