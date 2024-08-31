

export default function Home() {

  return (
    <main >
      <section className='flex flex-col justify-center items-center h-screen'>
        <img className="absolute z-0 h-screen w-full" src="https://imgur.com/nUCuS9Y.png" alt="" />
        <h1 className='text-6xl z-10 m-0 text-center'>EXPLORE THE UNIVERSE</h1>
      </section>
      <section className="bg-primary">
        <div className="flex justify-center text-center">
          <p className="w-1/2 p-16 text-lg">
            The galaxy is full of infinite mystery. Even with modern day tools and crafts we know
            only a sliver of the terrestrial bodies in our universe. Explore our system and neighboring ones
            as well as constellations and the stars within them! look on to the future, the horizon, and to the
            stars unknown.
          </p>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="h-40">
          <h1>body</h1>
        </div>
      </section>
      <section className="bg-tertiary-color">
        <h1 className="h-40">footer</h1>
      </section>
    </main>
  )
}
