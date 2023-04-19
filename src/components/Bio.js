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
                    My name is Jason and I am a software engineer with a passion for solving complex problems,
                    particularly those that involve building scalable, maintainable software systems. As someone 
                    who is always looking to improve and grow, my ultimate goal is to become a software architect,
                    a position that will allow me to shape the design and direction of large-scale systems.      
                </p>
                <br></br>
                <p>
                    I am constantly seeking new opportunities to challenge myself and grow as a software engineer. Whether it is through online courses, personal projects, or industry events,
                    I am always looking for ways to improve my skills and knowledge.
                </p>
            </div>

            <TechStack />
        </section>
    )
}

export default Bio