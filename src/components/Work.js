import React, { useState } from 'react';
import WorkCard from './WorkCard';

const Work = () => {
    const [showMM, setShowMM] = useState(true);

    const handleShowMM = () => {
        if (showMM === false){
            const MMBtn = document.getElementById('moneymoves');
            const amiliBtn = document.getElementById('amili')
            amiliBtn.classList.remove("bg-[#454545]");
            MMBtn.classList.add("bg-[#454545]");
            setShowMM(true);
        }
    }

    const handleShowAmili = () => {
        const MMBtn = document.getElementById('moneymoves');
        const amiliBtn = document.getElementById('amili')
        MMBtn.classList.remove("bg-[#454545]");
        amiliBtn.classList.add("bg-[#454545]");
        setShowMM(false);
    }

    return (
        <section className='pt-20 mb-20 md:pt-24'>
            <div className='flex'>
                <h1 className='text-2xl border-b-4 md:text-2xl border-secondaryTextColor'>Work</h1>
            </div>

            <div className='flex flex-col md:flex-row pt-7'>
                <div className='flex items-start font-medium md:justify-start md:flex-col text-secondaryTextColor'>
                    <button
                        id='moneymoves'
                        className='font-bold bg-[#454545] rounded-md px-2 py-1 text-secondaryTextColor'
                        onClick={handleShowMM}
                    >
                        MoneyMoves
                    </button>
                    <button
                        id='amili'
                        className='px-2 py-1 font-bold rounded-md text-secondaryTextColor'
                        onClick={handleShowAmili}
                    >
                        Amili
                    </button>
                </div>

                <WorkCard showMM={showMM}/>
            </div>
        </section>
    )
}

export default Work