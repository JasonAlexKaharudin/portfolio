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
        name: 'Analytics Application',
        dates: '2020',
        description: ["Set up a basic web server using Apache to create an analytics app to answer the question “How many users are experiencing load times of more than 1000ms?”. Created a script that collects load time and effective connection type using JavaScript objects: Window, Navigation and Timing.",
            "Used AJAX calls to my server with data collected when the user leaves the page for real-time data. Made use of ExpressJS to set up API endpoints quickly where I processed the data into MongoDB. Non-relational to fit nature of data which is unique and specific."
        ],
        stack: ['JavaScript', 'Express', 'Bootstrap', 'MongoDB'],
        site: '',
        github: 'https://github.com/JasonAlexKaharudin/analyticsapp',
        miro: '',
        figma: '',
    },
    {
        id: 'sportsteammatesforu',
        name: 'Sports Teammates For U',
        dates: '2019',
        description: ["        As a software architect for this school project, I decided which technologies to use based on the skillset of our team, what we wanted to learn and the deadline. We decided on React due to its wide use in the industry and Django for the backend because due to its development speed."],
        stack: ['JavaScript', 'Express', 'Bootstrap', 'MongoDB'],
        site: 'https://stfu-90f02.firebaseapp.com/',
        github: 'https://github.com/JasonAlexKaharudin/S.T.F.U',
        miro: '',
        figma: '',
    },
    {
        id: 'workoutTracker',
        name: 'Workout Tracker',
        dates: '2022',
        description: ["I made this application because I wanted an application (free) that helps me keep track of time, sets and reps during a workout session. I also wanted to see my progress for each workout or exercise that will be represented with some data vizualization.",
            "I am still currently working on optimizing the application in terms of my React code. I also hope to add more features that will make this app more lively and enjoyable to use. You can check out my prototypes on the figma link below!"
        ],
        stack: ['JavaScript', 'Express', 'Bootstrap', 'MongoDB'],
        link: '',
        github: 'https://github.com/JasonAlexKaharudin/workoutTracker',
        miro: '',
        figma: 'https://www.figma.com/file/Jk7EA17vNandmtNjQa1IH8/Workout-Tracker?node-id=0%3A1',
    },
]