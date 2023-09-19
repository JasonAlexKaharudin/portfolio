import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FooterCard from '../components/FooterCard';
import AnalyticsContext from '../AnalyticsContext';
import { v4 as uuidv4 } from 'uuid';
import { sendClickInformation } from '../sendToServer';
import useBrowserInfo from '../hooks/useBrowserInfo';

const userID = uuidv4();

const Layout = ({ children }) => {
    const [clicks, setClicks] = useState([]);
    sessionStorage.setItem('userID', userID);
    sessionStorage.setItem('clicks', JSON.stringify(clicks));

    useBrowserInfo();

    useEffect(() => {
        window.onbeforeunload = () => {
            sendClickInformation({ userID: userID, clicks: clicks });
            setClicks([]);
            sessionStorage.removeItem('clicks');
            sessionStorage.removeItem('userID')
        }

        return () => {
            window.onbeforeunload = null;
        };
    }, [clicks]);

    const handleTrackClick = (e) => {
        const buttonId = e.currentTarget.id;
        const pageURL = window.location.pathname;
        setClicks([...clicks, { buttonId: buttonId, pageURL: pageURL, timestamp: new Date() }])
    }

    return (
        <>
            <AnalyticsContext.Provider value={{ handleTrackClick, userID }}>
                <Navbar/>
                <main className='flex flex-col max-w-screen-md px-12 pb-24 m-auto md:px-16 bg-mainBG text-primaryTextColor'>
                    {children}
                </main>
                <FooterCard/> 
            </AnalyticsContext.Provider>
        </>
    )
}

export default Layout;