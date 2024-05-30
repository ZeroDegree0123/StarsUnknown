import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div className='flex justify-between p-8 space-x-5' style={{ background: '#070F2B' }}>
            <Link className='text-white' href="/">Home</Link>
            <div className='space-x-5'>
                <Link className='text-white' href="/constellations">Constellations</Link>
                <Link className='text-white' href="/stars">Stars</Link>
                <Link className='text-white' href="/planets">Planets</Link>
                <Link className='text-white' href="/spacecraft">SpaceCraft</Link>
                <Link className='text-white' href="/astronauts">Astronauts</Link>
            </div>
        </div>
    )
}

export default NavBar