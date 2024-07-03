import "../../globals.css"
import React from 'react'

interface Constellation {
    id: number
    name: string
    description: string
    stars: string
    image: string
}

interface Props {
    params: { id: number }
}

const ContellationPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://localhost:3000/api/constellations/${id}`, { cache: 'no-store' });

    const constellation: Constellation = await res.json()

    return (
        <main className='flex flex-col items-center h-full py-10'>
            <img className='w-1/3' src={`${constellation.image}.png`} alt="" />
            <h1 className='text-quarternary-color text-center p-4 m-0 border-b w-3/4'>{constellation.name}</h1>
            <div className="flex flex-row justify-center w-3/4">
                <p className='py-10 w-5/6 text-left text-white'>{constellation.description}</p>
                <ul className="flex flex-col justify-evenly items-center w-full">
                    <li>stars</li>
                    <li>stars</li>
                    <li>stars</li>
                    <li>stars</li>
                </ul>
            </div>
        </main>
    )
}

export default ContellationPage