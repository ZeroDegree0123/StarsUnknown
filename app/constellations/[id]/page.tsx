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

interface Stars {
    id: number
    name: string
    constellationName: string
}

const ContellationPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://localhost:3000/api/constellations/${id}`, { cache: 'no-store' });
    const stars = await fetch(`http://localhost:3000/api/stars`, { cache: 'no-store' });

    const constellation: Constellation = await res.json();
    const starList: Stars[] = await stars.json();

    let constellationStars = starList.filter((star) => {
        if (star.constellationName === constellation.name) {
            return star
        }
    })

    let superStars = constellationStars.map((star) => (
        <p key={star.id}>{star.name}</p>
    ))

    return (
        <main className='flex flex-col items-center h-full py-10'>
            <img className='w-1/3' src={`${constellation.image}.png`} alt="" />
            <h1 className='text-quarternary-color text-center p-4 m-0 border-b w-3/4'>{constellation.name}</h1>
            <div className="flex flex-row justify-center w-3/4">
                <p className='py-10 w-5/6 text-left text-white'>{constellation.description}</p>
                <ul className="flex flex-col justify-start items-center w-full pt-10">
                    <h2 className="font-bold">STARS</h2>
                    <li className="pt-6">{superStars}</li>
                </ul>
            </div>
        </main>
    )
}

export default ContellationPage