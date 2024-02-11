'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface AstronautForm {
    name: string
    image: string
    nation: string
    missions: string
    description: string
}

const NewAstronautPage = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<AstronautForm>()

    return (
        <>
            <form onSubmit={
                handleSubmit(async (data) => {
                    await axios.post('/api/astronauts', data);
                    router.push('/astronauts');
                })
            }
                className='flex flex-col justify-center items-center'>
                <input type="text" {...register('name')} placeholder='Name' />
                <input type="text" {...register('image')} placeholder='Image' />
                <input type="text" {...register('nation')} placeholder='Nation' />
                <input type="text" {...register('missions')} placeholder='Missions' />
                <textarea typeof="text" {...register('description')} placeholder='Description' />
                <input type='submit' />
            </form>
        </>
    )
}

export default NewAstronautPage