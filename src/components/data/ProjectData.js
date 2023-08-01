export const ProjectData = [
    {
        id: 'moneymoves',
        name: 'Money Moves',
        dates: '2021 - 2022',
        description: [
            "Money Moves is a platform that helps its users invest their cashback earned from shopping with our partners into emerging blockchain markets as well as robo-advisors. I cofounded Money Moves with a friend in Singapore where we participated in the NUS GRIP Run 6 for pre-seed funding.",
            "During the Run 6 in GRIP, we were tasked to develop an MVP within 6 months. I decided that the MVP shuold be hosted on DigitalOcean’s App Platform as they did a lot of the heavy lifting for us in terms of pushing to production and was perfect for us to deploy an MVP fast. However, this came at a cost of settings and monitoring logs to be quite inflexible."
        ],
        stack: ['Django', 'PostgreSQL', 'React', 'Tailwindcss'],
        site: 'https://moves.money',
        github: 'https://github.com/JasonAlexKaharudin/moneymoves-deploy',
        miro: 'https://miro.com/app/board/o9J_lEVy5fU=/?share_link_id=884267909757',
        figma: 'https://www.figma.com/file/B7K5BLYUEvdc3wEIdKeco5/MoneyMoves-v2?node-id=0%3A1',
    },
    {
        id: 'analyticsApp',
        name: 'Analytics App',
        dates: '2023',
        description: ["Developed a dashboard that tracks interactions with my personal website. I used Recharts to help me present actionable data, including button clicks, browser information, and page view duration, empowering myself to make informed decisions and enhance website interaction and engagement.",
            "Implemented data tracking by attaching scripts to my website on react, which sent the information to a server hosted on fly.io. I set up my endpoints using Express.js to allow data submission, and MongoDB to store and manage the collected data."
        ],
        stack: ['React', 'Express', 'NodeJS', 'MongoDB'],
        site: 'https://analytics-app-gilt.vercel.app/',
        github: 'https://github.com/JasonAlexKaharudin/analyticsapp',
        miro: '',
        figma: '',
    },
    {
        id: 'financeDashboard',
        name: 'Finance Dashboard',
        dates: '2023',
        description: ["Using Typescript React and Vite to aid my development, I created a finance dashboard with Recharts with mock data in mongoDB. Mock data was obtained from my mongoDB through APIs that I set up with Express.",
            "The frontend site is deployed on vercel, while the Node application is hosted on fly.io. Both free."
        ],
        stack: ['Typescript', 'React', 'Express', 'MongoDB'],
        site: 'https://finance-dashboard-jasonalexkaharudin.vercel.app/',
        github: 'https://github.com/JasonAlexKaharudin/workoutTracker',
        miro: '',
        figma: '',
    },
    {
        id: 'sportsteammatesforu',
        name: 'Sports Teammates For U',
        dates: '2019',
        description: ["As a 'software architect' for this school project, I decided which technologies to use based on the skillset of our team, what we wanted to learn and the deadline. We decided on React due to its wide use in the industry and Django for the backend because due to its development speed."],
        stack: ['React', 'Django', 'PostgreSQL'],
        site: 'https://stfu-90f02.firebaseapp.com/',
        github: 'https://github.com/JasonAlexKaharudin/S.T.F.U',
        miro: '',
        figma: '',
    },
    {
        id: 'workoutTracker',
        name: 'Workout Tracker',
        dates: '2022',
        description: [
            "I made this application because I wanted an application (free) that helps me keep track of time, sets and reps during a workout session. I also wanted to see my progress for each workout or exercise that will be represented with some data vizualization."
        ],
        stack: ['React', 'Express', 'TailwindCSS', 'MongoDB'],
        site: '',
        github: 'https://github.com/JasonAlexKaharudin/workoutTracker',
        miro: '',
        figma: 'https://www.figma.com/file/Jk7EA17vNandmtNjQa1IH8/Workout-Tracker?node-id=0%3A1',
    },
]