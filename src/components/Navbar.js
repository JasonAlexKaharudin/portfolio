import { useContext } from 'react';
import AnalyticsContext from '../AnalyticsContext.js';

const Navbar = () => {
  const { handleTrackClick } = useContext(AnalyticsContext);

  return (
    <>
      <nav className='flex justify-between px-5 py-6 md:px-10 md:py-10'>
        <div>
          <a id='nav-wacko' href="/" className='pb-0 md:pb-10'>
            <span className="self-center text-4xl font-semibold whitespace-nowrap font-monospace text-primaryTextColor">Wacko</span>
          </a>
        </div>

        <div className='pb-4 pl-3 md:pt-2 md:pb-0 text-fourthColor font-VT323'>
          <a 
            href='https://drive.google.com/file/d/1SmnNAFPpq0H-FnBvIuzNPHs_AJQ1M3oa/view?usp=sharing' 
            className='px-3 py-1 text-2xl border-4 rounded-md border-fourthColor'
            id='nav-resume'
            onClick={(e) => handleTrackClick(e)}
          >
            Resume
          </a>                  
        </div>
      </nav>
      {/* <nav className="py-6 pl-6 rounded sm:px-4 dark:bg-gray-800 text-primaryTextColor">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a id='nav-wacko' href="/" className='pb-0 md:pb-10' onClick={(e) => toggle(e)}>
            <span className="self-center text-4xl font-semibold whitespace-nowrap font-monospace">Wacko</span>
          </a>

          <button
            className="p-2 mr-3 border-2 border-[#A4A4A4] rounded-md md:hidden"
            onClick={toggle}
          >
            <AiOutlineMenu size={27} color={'A4A4A4'} />
          </button>

          <div className="w-full md:block md:w-auto">
            <div id='MobileMenu' className='absolute right-0 hidden w-5/12 max-w-sm pb-10 pr-3 md:block md:static top-18 md:pr-0 md:z-0 md:bg-none'>
              <div className='flex flex-col bg-[#202023] items-start pr-3 mt-3 border-2 rounded-md border-[#A4A4A4] md:border-0 md:flex-row md:pt-0'>
                {
                  location.pathname === "/" ?
                    <a id='/-nav-button' href='#work' className="px-3 py-3 font-medium" onClick={(e) => toggle(e)}>Work</a>
                    :
                    <Link id='nav-work' to='/' className="px-3 py-3 font-medium" onClick={(e) => toggle(e)}>Work</Link>

                }
                <Link id='nav-projects-button' to="/projects" className="px-3 py-3 font-medium"  onClick={(e) => toggle(e)}>Projects</Link>                 

                <div className='pb-4 pl-3 md:pt-2 md:pb-0 text-fourthColor font-VT323'>
                  <a 
                    href='https://drive.google.com/file/d/1SmnNAFPpq0H-FnBvIuzNPHs_AJQ1M3oa/view?usp=sharing' 
                    className='px-3 py-1 text-2xl border-4 rounded-md border-fourthColor'
                    id='nav-resume'
                    onClick={(e) => handleTrackClick(e)}
                  >
                    Resume
                  </a>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  )
}

export default Navbar