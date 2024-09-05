"use client"
import React, { useState } from 'react'
import Link from 'next/link';


interface Astronaut {
    id: Number
    name: String
    image: String
    description: String
    url: String
    nation: String
    missions: string

}

const AstronautCard = ({ id, name, image, url, description, nation, missions }: Astronaut) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (!isActive) {
            setIsActive(true);
        } else {
            setIsActive(false)
        }
    }

    return (
        <>
            {isActive ?
                <div className='flex flex-col justify-center items-center mb-4 w-3/4 shadow-lg bg-white border border-stone-950 '>
                    <div
                        id='card-container'
                        className='flex justify-between items-center p-4 pb-0 w-full '
                        onClick={handleClick}
                    >
                        <img className='w-1/4 h-1/4 shadow-sm' src={`${image}.png`} alt="" />
                        <div className='flex flex-col items-end px-10'>
                            <h1 className='m-0 text-primary-color'>{name}</h1>
                            <Link className='underline text-primary-color' href={`/${url}/${id}`}>To {name}</Link>
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-full pb-4'>
                        <div className='flex flex-col justify-center items-center p-4 w-2/3'>
                            <p className='text-black'>{description}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center px-4 w-1/3'>
                            <div>{missions}</div>
                            <div>{nation}</div>
                        </div>
                    </div>
                </div>
                :
                <div
                    id='card-container'
                    className='flex flex-row items-center justify-between m-4 p-4 w-3/4 shadow-lg bg-white border border-stone-950'
                    onClick={handleClick}
                >
                    <img className='w-1/4 h-1/4 shadow-sm' src={`${image}.png`} alt="" />
                    <div className='flex flex-col items-end px-10'>
                        <h1 className='m-0 text-primary-color'>{name}</h1>
                        <Link className='underline text-primary-color' href={`/${url}/${id}`}>To {name}</Link>
                    </div>
                </div>
            }
        </>
    )
}

export default AstronautCard