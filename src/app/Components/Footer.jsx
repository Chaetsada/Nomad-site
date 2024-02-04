import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[100vh] md:h-[40vh]  bg-primary-100 text-white'>
      <div className='container min-h-fit px-5 md:px-0'>
        <main className='flex flex-col md:flex-row py-12 gap-10 border-b border-gray-500'>
          <section className='flex-2 flex flex-col gap-5 h-full '>
            <h5 className='text-white text-3xl font-bold'>nomad.</h5>
            <p className='text-white max-w-2xl'>Work remotely, explore various destinations, and make lasting memories with a community of digital nomads</p>
          </section>
          <section className='flex-1 h-full'>
            <h5 className='text-white font-bold mb-5'>Links</h5>
            <div className='flex flex-col space-y-3'>
              <Link className='text-gray-400 hover:text-white' href='/about'>About</Link>
              <Link className='text-gray-400 hover:text-white' href='/destinations'>Destinations</Link>
              <Link className='text-gray-400 hover:text-white' href='/FAQ'>FAQ</Link>
              <Link className='text-gray-400 hover:text-white' href='/contact'>Contact us</Link>
            </div>
          </section>
          <section className='flex-1 h-full'>
            <h5 className='text-white font-bold mb-5'>Destinations</h5>
            <div className='flex flex-col space-y-3'>
             <Link className='text-gray-400 hover:text-white' href='/destinations/seoul-south-korea'>Seoul, Korea</Link>
             <Link className='text-gray-400 hover:text-white' href='/destinations/tokyo-japan'>Tokyo, Japan</Link>
             <Link className='text-gray-400 hover:text-white' href='/destinations/santorini-greece'>Santorini, Greece</Link>
             <Link className='text-gray-400 hover:text-white' href='/destinations/positano-italy'>Positano, Italys</Link>
             <Link className='text-gray-400 hover:text-white' href='/destinations/bali-indonesia'>Bali, Indonesia</Link>
            </div>
          </section>
          <section className='flex-1 h-full'>
            <h5 className='text-white font-bold mb-5'>Socials</h5>
            <div className='flex flex-col space-y-3'>
              <Link className='text-gray-400 hover:text-white' href='/'>Dribble</Link>
              <Link className='text-gray-400 hover:text-white' href='/'>Youtube</Link>
              <Link className='text-gray-400 hover:text-white' href='/'>Instragram</Link>
              <Link className='text-gray-400 hover:text-white' href='/'>Twitter</Link>
            </div>
          </section>
        </main>
        <div className='flex flex-col md:flex-row justify-between py-5'>
          <h4>Developed by chaetsada kulawong</h4>
          <h4>Made by Next.js</h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer