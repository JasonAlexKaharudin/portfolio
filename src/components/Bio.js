import React from 'react'
import TechStack from './TechStack';

const Bio = () => {
    return (
        <section className='pt-20 md:pt-24'>
            <div className='flex'>
                <h1 className='text-2xl border-b-4 md:text-2xl border-secondaryTextColor font-monospace'>Bio</h1>
            </div>

            <div className='pt-5 text-md max-w-7xl'>
                <p>
                    My name is Jason and I enjoy building things on the web.
                    Based in Singapore, I am currently working at 
                    <span className='text-thirdColor'> StraitsX </span> 
                    enjoying every moment as a 
                    <span className='text-thirdColor'> Software Engineer</span>.                    
                </p>
                <br></br>
                <p>
                    I am proud to have completed earned my Bachelors in Computer Science at the University of California, San Diego.
                    So far, I've had the pleasure of being <span className='text-thirdColor'>UX designer</span> and <span className='text-thirdColor'>project manager intern </span>
                    and had the privilege to run my own start-up <span className='text-thirdColor'>Money Moves </span>
                    which was part of <a className='underline hover:text-fourthColor' href='https://nus.edu.sg/grip/news/nus-grip-run-6-lift-off-day/'> NUS Graduate Research Innovation Program run 6.</a>
                </p>
            </div>

            <TechStack />
        </section>
    )
}

export default Bio