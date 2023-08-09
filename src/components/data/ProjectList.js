import AApic from '../../assets/AApic.png'
import MMpic from '../../assets/MMpic.png';
import stfuPic from '../../assets/stfuPic.png';
import fbPic from '../../assets/fbPic.png';


const fd = {
    name: 'Finance Dashboard',
    picture: fbPic,
    alt: 'financeDashboard',
    stack: ['Typescript', 'React', 'Express', 'MongoDB'],
    header: 'Finance dashboard allows users to see their business metrics in a pretty way.'
}

const aa = {
    name: 'Analytics Application',
    picture: AApic,
    alt: 'analyticsApp',
    stack: ['React', 'Express', 'NodeJS', 'MongoDB'],
    header: 'Developed an analytics dashboard that tracks interactions with my personal website. '
}

const mm = {
    name: 'Money Moves',
    picture: MMpic,
    alt: 'moneymoves',
    stack: [ 'Django', 'PostgreSQL', 'React', 'Tailwindcss' ],
    header: 'Platform that allows users to invest cashback when they shop with our merchants'
}

const stfu = {
    name: 'Sports Teammates For U',
    picture: stfuPic,
    alt: 'sportsteammatesforu',
    link: 'https://stfu-90f02.firebaseapp.com/',
    github: 'https://github.com/JasonAlexKaharudin/S.T.F.U',
    stack: [ 'Django', 'React', 'Firebase', 'JavaScript'],
    header: 'Platform for users to find teammates, opponents and referees for casual sports.'
}

export const projectList = [
    fd,
    aa,
    mm,
    stfu,
]