import React from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="py-6 pl-6 rounded sm:px-4 dark:bg-gray-800 text-primaryTextColor">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className='pb-0 md:pb-10'>
            <span className="self-center text-4xl font-semibold whitespace-nowrap font-monospace">Wacko</span>
          </a>

          <button className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100">
            <RiMenu3Line size={27} />
          </button>

          <div className="hidden w-full md:block md:w-auto">
            <div className='absolute z-10 w-full pr-9 bg-[#202023] md:pr-0 md:z-0 md:static md:bg-none pb-10'>
              <div className='flex flex-col items-center justify-between pt-3 md:flex-row md:pt-0'>                
                <Link to='/' className='px-3 py-3'>Work</Link>
                <Link to="/projects" className='px-3 py-3'>Projects</Link>                
                <div className='pl-2 text-fourthColor font-VT323'>
                  <button className='px-3 py-1 text-2xl border-4 rounded-md border-fourthColor'>
                    Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar