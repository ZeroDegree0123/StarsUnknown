import React from 'react'

interface Spacecraft {
    id: number
    name: string
    image: string
    nation: string
    yearLaunched: string
    description: string
}

interface Props {
    params: { id: number }
}

const SpacecraftDetailsPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://localhost:3000/api/spacecraft/${id}`, { cache: 'no-store' });
    const spacecraft: Spacecraft = await res.json();

    return (
        <main className='flex flex-col items-center justify-center h-full'>
            <img className='w-1/3 mt-10 pt-16' src={`${spacecraft.image}.png`} alt="" />
            <h1 className='border-b w-2/3 text-center p-2 mt-10'>{spacecraft.name}</h1>
            <div className='flex flex-row justify-evenly w-4/5 p-10'>
                <div className='flex flex-col items-center'>
                    <p className='text-4xl'>{spacecraft.nation}</p>
                    <p>Nation</p>
                </div>
                <br />
                <div className='flex flex-col items-center'>
                    <p className='text-4xl'>{spacecraft.yearLaunched}</p>
                    <p>Year Lauched</p>
                </div>
            </div>
            <p className='w-4/5 text-center mb-20'>{spacecraft.description}</p>
        </main>
    )
}

export default SpacecraftDetailsPage