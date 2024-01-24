import axios from 'axios'
import Link from 'next/link'
import React from 'react'

const ConstellationsPage = () => {
    const constellationData = axios.get('/api/constellations')

    console.log(constellationData)
    // const constellationList = constellationData.map((data) => <div>{data.name}</div>)

    return (
        <main className='flex justify-center items-center flex-col'>
            <div>ConstellationPage</div>
            <Link href="constellations/new" className='p-2 m-5'>New Constellation</Link>

        </main>
    )
}

export default ConstellationsPage