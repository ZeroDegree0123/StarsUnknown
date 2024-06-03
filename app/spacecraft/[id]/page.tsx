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
        <main className='flex flex-col items-center justify-center h-screen'>
            <h1 className='pt-20 border-b w-2/3 text-center p-2'>{spacecraft.name}</h1>
            <img className='w-1/3' src={`${spacecraft.image}.png`} alt="" />
            <div className='flex flex-row justify-between w-4/5 p-20'>
                <p>{spacecraft.nation}</p>
                <p>{spacecraft.yearLaunched}</p>
            </div>
            <p className='w-4/5 text-center'>{spacecraft.description}</p>
        </main>
    )
}

export default SpacecraftDetailsPage