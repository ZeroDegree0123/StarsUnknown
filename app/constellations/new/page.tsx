'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface ConstellationForm {
    name: string
    image: string
    description: string
}

const NewConstellationPage = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<ConstellationForm>();

    return (
        <>
            <form onSubmit={
                handleSubmit(async (data) => {
                    await axios.post('/api/constellations', data);
                    router.push('/constellations');
                }
                )}
                className='flex flex-col justify-center items-center'>
                <input type="text" {...register('name')} placeholder='Name' className='w-1/5 p-2 m-2' />
                <input type="text" {...register('image')} placeholder='Image' className='w-1/5 p-2 m-2' />
                <textarea typeof='text' {...register('description')} placeholder='Description' className='w-1/5 p-2 m-2' />
                <input type="submit" />
            </form>

        </>
    )
}

export default NewConstellationPage