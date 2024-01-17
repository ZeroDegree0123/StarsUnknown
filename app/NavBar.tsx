import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div className='flex justify-between p-5 space-x-5'>
            <Link href="/">Home</Link>
            <div className='space-x-5'>
                <Link href="/constellations">Constellations</Link>
                <Link href="/stars">Stars</Link>
                <Link href="/planets">Planets</Link>
                <Link href="/spacecraft">SpaceCraft</Link>
                <Link href="/astronauts">Astronauts</Link>
            </div>
        </div>
    )
}

export default NavBar