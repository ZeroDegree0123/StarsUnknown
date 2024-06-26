'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface StarForm {
    name: string
    image: string
    type: string
    magnitude: string
    description: string
    constellationName: string
}

const NewStarPage = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<StarForm>();

    return (
        <>
            <form onSubmit={
                handleSubmit(async (data) => {
                    await axios.post('/api/stars', data);
                    router.push('/stars');
                })
            }
                className='flex flex-col justify-center items-center'>
                <input type="text" {...register('name')} placeholder='Name' />
                <input type="text" {...register('image')} placeholder='Image' />
                <input type="text" {...register('type')} placeholder='Type' />
                <input type="text" {...register('magnitude')} placeholder='Magnitude' />
                <input type="text" {...register('constellationName')} placeholder='ConstellationName' />
                <textarea typeof='text' {...register('description')} placeholder='Description' />
                <input type="submit" />
            </form>
        </>
    )
}

export default NewStarPage