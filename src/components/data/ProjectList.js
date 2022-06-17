import AApic from '../../assets/AApic.png'
import MMpic from '../../assets/MMpic.png';
import stfuPic from '../../assets/stfuPic.png';
import WIPpics from '../../assets/WIPpics.png';

const mm = {
    name: 'Money Moves',
    picture: MMpic,
    alt: 'moneymoves',
    stack: [ 'Django', 'PostgreSQL', 'React', 'Tailwindcss' ],
    header: 'Platform that allows users to invest cashback when they shop with our merchants'
}

const aa = {
    name: 'Analytics Application',
    picture: AApic,
    alt: 'analyticsApp',
    stack: [ 'JavaScript', 'Express', 'Bootstrap', 'MongoDB' ],
    header: 'App that helps track visitors to answer the question “How many users are experiencing load times more than 1000ms?”'
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

const workout = {
    name: 'Workout Tracker',
    picture: WIPpics,
    alt: 'workoutTracker',
    link: '',
    github: 'https://github.com/JasonAlexKaharudin/workoutTracker',
    stack: [ 'React', 'Firebase', 'MongoDB', 'JavaScript'],
    header: 'Application that aids in tracking workouts and to show progress through data vizualization. Work in progress!'
}

export const projectList = [
    mm, 
    aa,
    stfu,
    workout
]