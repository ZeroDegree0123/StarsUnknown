import Image from 'next/image'
import SearchBar from './components/SearchBar/SearchBar'

export default function Home() {

  return (
    <main>
      <section className='flex flex-col justify-center items-center h-screen '>
        <h1 className='text-6xl'>EXPLORE THE UNIVERSE</h1>
        <SearchBar />
      </section>
      <section>
        <h1>footer</h1>
      </section>
    </main>
  )
}
