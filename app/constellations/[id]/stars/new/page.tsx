'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface StarForm {
    name: string
    type: string
    size: string
    distance: string
    description: string
}

const NewStarPage = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<StarForm>();

    return (
        <>
            <form onSubmit={
                handleSubmit(async (data) => {
                    await axios.post('/api/constellations/stars', data);
                    router.push('/constellations/stars')
                })
            }
                className='flex flex-col justify-center items-center'>
                <input type="text" {...register('name')} />
                <input type="text" {...register('type')} />
                <input type="text" {...register('size')} />
                <input type="text" {...register('distance')} />
                <textarea typeof='text' {...register('description')} />
                <input type="submit" />
            </form>
        </>
    )
}

export default NewStarPage