import React from 'react'
import Header from '../components/Header';
import Bio from '../components/Bio';
import Work from '../components/Work';
import FooterCard from '../components/FooterCard';
import { MdOutlineNavigateNext } from 'react-icons/md';

const HomePage = () => {
    return (
        <>
            <Header />
            <Bio />
            <section className='flex justify-center pt-16'>
                <button className='px-2 pl-3 py-2 text-[#000000] font-medium rounded-md bg-fourthColor hover:bg-[#957502]'>
                    <div className='flex'>
                        <p>Projects</p>
                        <span className='pt-[5px]'><MdOutlineNavigateNext /></span>
                    </div>
                    
                </button>
            </section>
            <Work />

            <FooterCard/>
        </>
    )
}

export default HomePage