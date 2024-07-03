import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import ListCard from '../components/ListCard/ListCard';

interface Star {
    id: number
    name: string
    image: string
}

const StarsPage = async () => {
    const res = await axios.get('http://localhost:3000/api/stars')
    const stars: Star[] = await res.data;

    return (
        <main className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl p-10 text-quarternary-color'>STARS</h1>
            {/* <Link href="/stars/new" className='p-2 m-5'>Create A New Star</Link> */}
            {stars.map(({ id, name, image }: Star) => (
                <ListCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    url='stars'
                />
            ))}
        </main>
    )
}

export default StarsPage