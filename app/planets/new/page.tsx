'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface PlanetForm {
    name: string
    image: string
    type: string
    size: string
    description: string
}

const NewPlanetPage = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<PlanetForm>()

    return (
        <>
            <form onSubmit={
                handleSubmit(async (data) => {
                    await axios.post('/api/planets', data);
                    router.push('/planets');
                })
            }
                className='flex flex-col justify-center items-center'>
                <input type="text" {...register('name')} placeholder='Name' />
                <input type="text" {...register('image')} placeholder='Image' />
                <input type="text" {...register('type')} placeholder='Type' />
                <input type="text" {...register('size')} placeholder='Size' />
                <textarea typeof="text" {...register('description')} placeholder='Description' />
                <input type='submit' />
            </form>
        </>
    )
}

export default NewPlanetPage