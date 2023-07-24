import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { WorkSummary } from './data/WorkSummary';
import WorkCard from './WorkCard';

const [stx, mm, amili] = WorkSummary;
const initTabs = [stx, mm, amili];

const Work = () => {
    const [selectedTab, setSelectedTab] = useState(initTabs[0]);
    
    const handleWorkBtnClick = (event, item) => {
        setSelectedTab(item);
    }

    return (
        <section className="pt-20 md:pt-24">
            <div className='flex'>
                <h1 id='work' className='text-2xl border-b-4 md:text-2xl border-secondaryTextColor font-monospace'>Work</h1>
            </div>

            <div className='flex flex-col pt-5 md:flex-row'>
                <div className='flex items-start font-medium md:justify-start md:flex-col text-secondaryTextColor '>

                    {initTabs.map((item) => (
                        <button
                            key={item.company}
                            id={`${item.company}-button`}
                            className={item === selectedTab ? 'font-medium bg-[#454545] transition-all ease-in-out delay-75 duration-500 rounded-md px-2 py-1 text-secondaryTextColor' : 'font-medium transition-all ease-in-out delay-75 duration-500 rounded-md px-2 py-1 text-secondaryTextColor'}
                            onClick={(event) => handleWorkBtnClick(event, item)}
                        >

                            {`${item.company}`}
                        </button>
                    ))}

                </div>
                <div className='md:pl-4'>
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            key={selectedTab && selectedTab.company}
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {
                                selectedTab &&
                                <WorkCard selectedTab={selectedTab} />
                            }


                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default Work