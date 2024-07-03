import React from 'react'

interface Astronaut {
    id: number
    name: string
    image: string
    nation: string
    missions: string
    description: string
}

interface Props {
    params: { id: number }
}

const AstronautPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://localhost:3000/api/astronauts/${id}`, { cache: 'no-store' });

    const astronaut: Astronaut = await res.json();

    return (
        <main className='flex justify-center items-top h-screen w-full'>
            <img className='w-1/3 m-8' src={`${astronaut.image}.png`} alt="" />
            <section className='flex flex-col w-2/3 pr-8'>
                <h1 className='text-4xl border-b pb-2'>{astronaut.name}</h1>
                <div className='flex flex-row justify-evenly my-10'>
                    <div className='text-center border-r-2 w-1/2 p-10'>
                        <p className='text-4xl p-1'>{astronaut.nation}</p>
                        <p>magnitude</p>
                    </div>
                    <div className='text-center w-1/2 p-10'>
                        <p className='text-center text-4xl p-1'>{astronaut.missions}</p>
                        <p>class</p>
                    </div>
                </div>
                <p className='border-t pt-2'>{astronaut.description}</p>
            </section>
        </main>
    )
}

export default AstronautPage