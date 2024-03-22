'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface SpaceCraftForm {
    name: string
    image: string
    crew: string
    nation: string
    yearBuilt: string
    description: string
}

const NewSpaceCraftPage = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<SpaceCraftForm>();

    return (
        <>
            <form onSubmit={
                handleSubmit(async (data) => {
                    await axios.post('/api/spaceCraft', data);
                    router.push('/spaceCraft');
                })
            }
                className='flex flex-col justify-center items-center'>
                <input type="text" {...register('name')} placeholder='Name' />
                <input type="text" {...register('image')} placeholder='Image' />
                <input type="text" {...register('crew')} placeholder='Crew' />
                <input type="text" {...register('nation')} placeholder='Nation' />
                <input type="text" {...register('yearBuilt')} placeholder='Year Built' />
                <textarea typeof="text" {...register('description')} placeholder='Description' />
                <input type='submit' />
            </form>
        </>
    )
}

export default NewSpaceCraftPage