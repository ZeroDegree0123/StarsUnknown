import React from 'react'

interface Star {
    id: number
    name: string
    image: string
    type: string
    magnitude: string
    description: string
}

interface Props {
    params: { id: number }
}

const StarPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://localhost:3000/api/stars/${id}`, { cache: 'no-store' });

    const star: Star = await res.json();

    return (
        <main className='flex justify-center items-center h-screen w-full'>
            <img className='w-1/3 m-8 rounded-full' src={`${star.image}.png`} alt="" />
            <section className='flex flex-row w-4/5 pr-8'>
                <div className=''>
                    <h1 className='text-4xl border-b pb-2'>{star.name}</h1>
                    <div className='flex flex-row justify-evenly my-10'>
                        <div className='text-center border-r-2 w-1/2 p-10'>
                            <p className='text-4xl p-1'>{star.magnitude}</p>
                            <p>magnitude</p>
                        </div>
                        <div className='text-center w-1/2 p-10'>
                            <p className='text-center text-4xl p-1'>{star.type}</p>
                            <p>class</p>
                        </div>
                    </div>
                    <p className='border-t pt-2'>{star.description}</p>
                </div>
            </section>
        </main>
    )
}

export default StarPage