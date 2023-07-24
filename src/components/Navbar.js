import { useState, useContext } from 'react';
import AnalyticsContext from '../AnalyticsContext.js';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const { handleTrackClick } = useContext(AnalyticsContext);
  const [hidden, setHidden] = useState(true);
  let location = useLocation();

  const toggle = (e) => {
    const menu = document.getElementById('MobileMenu');

    if (hidden === true) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }

    setHidden(!hidden);
    handleTrackClick(e)
  }

  return (
    <>
      <nav className="py-6 pl-6 rounded sm:px-4 dark:bg-gray-800 text-primaryTextColor">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a id='wacko-nav-button' href="/" className='pb-0 md:pb-10' onClick={(e) => toggle(e)}>
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
                    <Link id='work-nav-button' to='/' className="px-3 py-3 font-medium" onClick={(e) => toggle(e)}>Work</Link>

                }
                <Link id='projects-nav-button' to="/projects" className="px-3 py-3 font-medium"  onClick={(e) => toggle(e)}>Projects</Link>                 

                <div className='pb-4 pl-3 md:pt-2 md:pb-0 text-fourthColor font-VT323'>
                  <a 
                    href='https://drive.google.com/file/d/1Wj8-eR_dX9qFFKu7y4LKGJjNHFVnvK-c/view?usp=share_link' 
                    className='px-3 py-1 text-2xl border-4 rounded-md border-fourthColor'
                    id='resume-button'
                    onClick={(e) => handleTrackClick(e)}
                  >
                    Resume
                  </a>                  
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