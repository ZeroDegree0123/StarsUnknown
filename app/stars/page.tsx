import React from 'react'
import axios from 'axios'
import Link from 'next/link'

import StarCard from '../components/StarCard/StarCard'

interface Star {
    id: number
    name: string
    image: string
    description: string
}

const StarsPage = async () => {
    const res = await axios.get('http://localhost:3000/api/stars')
    const stars: Star[] = await res.data;

    return (
        <main className='flex justify-center items-center flex-col'>
            <div>StarsPage</div>
            <Link href="/stars/new" className='p-2 m-5'>Create A New Star</Link>
            {stars.map(({ id, name, image, description }: Star) => (
                <StarCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    description={description}
                />
            ))}
        </main>
    )
}

export default StarsPage