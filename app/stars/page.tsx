import React from 'react';
import axios from 'axios';

import StarCard from '../components/StarCard/StarCard';

interface Star {
    id: number
    name: string
    image: string
    description: string
    magnitude: string
    type: string
}

const StarsPage = async () => {
    const res = await axios.get('http://localhost:3000/api/stars')
    const stars: Star[] = await res.data;

    return (
        <main className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl p-10 text-quarternary-color'>STARS</h1>
            {/* <Link href="/stars/new" className='p-2 m-5'>Create A New Star</Link> */}
            {stars.map(({ id, name, image, description, magnitude, type }: Star) => (
                <StarCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    description={description}
                    magnitude={magnitude}
                    type={type}
                    url='stars'
                />
            ))}
        </main>
    )
}

export default StarsPage