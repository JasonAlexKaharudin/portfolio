import { useContext } from "react";
import AnalyticsContext from "../AnalyticsContext";

const Header = () => {
    const { handleTrackClick } = useContext(AnalyticsContext);

    return (
        <header className='pt-16 pb-7'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-5xl md:text-6xl'>Jason</h1>
                <h2 className='pt-2 text-4xl font-VT323 text-secondaryTextColor'>Software Engineer</h2>
                <a id='footer-email' href='mailto:jasonakaharudin@gmail.com' className='pt-2 md:pt-4 text-sm md:text-md font-monospace text-[#8E8E8E]' onClick={(e) => handleTrackClick(e)}>jasonakaharudin@gmail.com</a>
            </div>
        </header>
    )
}

export default Header