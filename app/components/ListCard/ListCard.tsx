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
        <div className='flex flex-row items-center justify-between border border-white m-4 p-4 w-3/4'>
            {/* <p className='px-10'>{image}</p> */}
            <img className='w-20 h-20' src={`${image}.png`} alt="" />
            <div className='px-10'>
                <h1 className='m-0'>{name}</h1>
                <Link className='underline' href={`/${url}/${id}`}>To Constellation</Link>
            </div>
        </div>
    )
}

export default ListCard