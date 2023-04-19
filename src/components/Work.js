import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import WorkCard from './WorkCard';

const WorkInfo = [
    { company: 'StraitsX', role: 'Software Engineer', dates: 'August 2022 - March 2023', res: ['Part of the API and Tooling Team', 'Developed pages on Retool using JavaScript which improved the efficiency of internal teams, reducing the engineering team support calls.', 'Designed and developed RESTful APIs for product features, internal teams using Ruby on Rails', "Owned end-to-end feature development lifecycle from designing, implementation, creating test scenarios, conducting bug fixes and enhancements."] },
    { company: 'MoneyMoves', role: 'Co-founder & CTO', dates: 'February 2021 - February 2022', res: ['Designed the architecture and implemented the MVP web app using Django and PostgreSQL', 'Designed, implemented and maintained customer-facing APIs.', "Implemented a JavaScript widget on a partner merchant’s site that increased impressions"] },
    { company: 'Amili', role: 'UX Designer & PM Intern', dates: 'May 2021 - August 2021', res: ['Managed tasks for the dev team ensure tasks meet their deadline while maintaining app functions.', 'Helped in the design of user journeys to accommodate different user goals for v2 of the customer dashboard'] }
]

const [stx, mm, amili] = WorkInfo;
const initTabs = [stx, mm, amili];

const Work = () => {
    const [selectedTab, setSelectedTab] = useState(initTabs[0]);

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
                            id={`${item.company}Btn`}
                            className={item === selectedTab ? 'font-medium bg-[#454545] transition-all ease-in-out delay-75 duration-500 rounded-md px-2 py-1 text-secondaryTextColor' : 'font-medium transition-all ease-in-out delay-75 duration-500 rounded-md px-2 py-1 text-secondaryTextColor'}
                            onClick={() => setSelectedTab(item)}>

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