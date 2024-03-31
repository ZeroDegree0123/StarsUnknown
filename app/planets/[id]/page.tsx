import React from 'react'

interface Planet {
    id: number
    name: string
    image: string
    type: string
    size: string
    moons: string
    distance: string
    description: string
}

interface Props {
    params: { id: number }
}

const PlanetPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://localhost:3000/api/planets/${id}`, { cache: 'no-store' });
    const planet: Planet = await res.json();

    return (
        <main>
            <section>
                <div>{planet.image}</div>
                <div>
                    <h1>{planet.name}</h1>
                    <p>{planet.description}</p>
                    <ul>
                        <li>{planet.moons}</li>
                    </ul>
                </div>
            </section>
            <section>
                <h1>Other Planets</h1>
                <div>
                    {/* Planet Card */}
                </div>
            </section>
        </main>
    )
}

export default PlanetPage