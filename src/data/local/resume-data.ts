import {Position} from "../../sections/positions";
import {Skill} from "../../sections/skills";
import {Contact} from "../../sections/contacts";

export const experiences: Position[] = [
    {
        id: 1,
        company: 'Tapsell',
        logo: 'https://avatars.githubusercontent.com/u/40333245?s=200&v=4',
        pageLink: 'https://www.linkedin.com/company/tapsell',
        position: 'Mobile SDK Engineer',
        dates: 'Jan 2022 - Present',
        location: 'Hybrid, Iran',
        description: 'Tapsell is Iran’s leading digital ad agency which delivers over 25 million clicks a day in Iran. It runs campaigns for over 500 local advertisers, agencies, and developers.\n' +
            'Developing and maintaining Android SDK using Java, Kotlin, Flutter, React Native, Unity, and B4A.\n' +
            'Integrating different products and modularizing libraries with features made developing SDK 50% faster.\n' +
            'Automating packages release process from development environment (Gitlab) to end-user (Github) that reduced publishing time by 50%.\n' +
            'Performed improvements as a Technical Support Specialist, which led to the reduction of user inquiries and reported issues on Github by 25%.\n' +
            'more than 5 platform types of packages are published on Maven, Npm, Pub, or in Github.\n' +
            'acting as a talent acquisition specialist to find 5 matched talents from the hiring process to onboarding.\n',
    },
    {
        id: 2,
        company: 'Eve World Platform Pte Ltd (COTO)',
        logo: 'https://avatars.githubusercontent.com/u/97168825?s=200&v=4',
        pageLink: 'https://www.linkedin.com/company/cotobyeveworld',
        position: 'Android Developer',
        dates: 'May 2023 - Feb 2023',
        location: 'Remote, Singapore',
        description: 'Coto is a Web3 social community platform exclusively for women written with Kotlin and Jetpack Compose\n' +
            'Installed by +10k users from Google Play or AppStore.\n' +
            'participated remotely with 15 multinational members team of Android Developers.\n',
    },
    {
        id: 3,
        company: 'Iran Airtour Airlines',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Iran_Airtour_Logo_Main.png/200px-Iran_Airtour_Logo_Main.png',
        pageLink: 'https://www.linkedin.com/company/iranairtour',
        position: 'Mobile Application Developer (React Native)',
        dates: 'Feb 2021 - Feb 2022',
        location: 'Onsite, Iran',
        description: 'Participating in a cross-platform team in one of the 5 most experienced and trusted airlines in Iran with over 40 years of experience in the transportation industry.\n' +
            'publishing several apps to AppStore, and Google Play installed by over 100 crew members and pilots.\n' +
            'Creating enterprise applications that grew the company revenue by 30% with a reduction of traditional procedures in the first release by applying best solutions like Typescript, multithreading, redux-toolkit, redux-saga, Axios, offline DB, Formik, etc.\n' +
            'Attended daily sessions with SCRUM methodology in an agile team of research and development members.\n',
    },
    {
        id: 4,
        company: 'Tivasoft',
        logo: 'https://www.svgrepo.com/show/449963/variants.svg',
        pageLink: 'https://www.linkedin.com/company/tivasoft',
        position: 'Android Developer',
        dates: 'Jan 2020 - Dec 2022',
        location: 'Onsite, Iran',
        description: 'Conducted the Mahout Android app to make the educational system better in China market.\n' +
            'Worked on the CarpetCity Android app that uses Augmented Reality (AR) and Virtual Reality (VR) which reduced the need for customers to visit by 15%',
    },
    {
        id: 5,
        company: 'Freelancer- Self employed · Freelance',
        logo: 'https://www.svgrepo.com/show/449963/variants.svg',
        pageLink: 'https://www.linkedin.com/company/freelanceers',
        position: 'Android Developer',
        dates: 'Sep 2016 - Feb 2020',
        location: 'Onsite, Iran',
        description: 'Created and tested over 10 Android, iOS, React Native and Flutter projects in different industries.',
    },
    {
        id: 6,
        company: 'Telecommunication Company of Iran (TCI)',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Tci_Arm_fa_Larg.png/540px-Tci_Arm_fa_Larg.png',
        pageLink: 'https://www.linkedin.com/company/telecommunication-company-of-iran---tci',
        position: 'Android Developer Intern',
        dates: 'Jun 2016 - Sep 2016',
        location: 'Onsite, Iran',
        description: 'Developed a Java Network-based Application that provided some network features like finding IPs, Device Hardware Info, Doing Ping tests, Traceroute, etc.',
    }
];

export const educations: Position[] = [
    {
        id: 1,
        company: 'SRBIAU',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/SRBIAU_logo.png/300px-SRBIAU_logo.png',
        pageLink: 'https://www.linkedin.com/school/srbiau/',
        position: 'Master of Engineering - MEng, Artificial Intelligence',
        dates: '2019 - 2022',
        location: 'Onsite, Iran',
        description: 'Grade: 3.9/4.0 GPA\n' +
            'Activities and societies: Digital Image Processing, Deep Learning, Neural Networks, Evolutionary Algorithms, Python, MatlabActivities and societies: Digital Image Processing, Deep Learning, Neural Networks, Evolutionary Algorithms, Python, Matlab\n' +
            'Achievement: 2nd rang among the incoming students in grade average (top 10%)\n' +
            'Grade: 3.75 GPA\n' +
            'Thesis: Facial Composite based on the Interactive Evolutionary AlgorithmsAchievement: acquired the position of brilliant talent among the incoming students in terms of grade point average (top 10%) Grade: 3.75 GPA Thesis: Facial Composite based on the Interactive Evolutionary Algorithms\n' +
            'Skills: Artificial Intelligence (AI) · Python (Programming Language) · MATLAB · Digital Image Processing · Computer Vision',
    },
    {
        id: 2,
        company: 'University of Hamadan, Iran',
        logo: 'https://www.svgrepo.com/show/449963/variants.svg',
        pageLink: '',
        position: 'Bachelor of Engineering - BE, Computer Software Engineering',
        dates: '2014 - 2018',
        location: 'Onsite, Iran',
        description: 'Grade: 3.36/4.0 GPA\n' +
            'Activities and societies: Data Mining, Android Development (Java)',
    }
];

export const skills: Skill[] = [
    {
        id: 1,
        type: 'Mobile (Android & iOS)',
        skills: 'Android Development, Android SDK, Android Studio, Java, Kotlin, Swift, React Native, SOLID principles, OOP design, Multi Modular, Clean Architecture, SQLite, Room, Dagger Hilt, Jetpack Compose, MVVM, MVI, MVP, Multithreading, Kotlin Coroutines, RxJava, Repository pattern, Redux, Google AR-Core, ExoPlayer, AMap(Chinese Map), Jackson, Gson, Moshi'
    },
    {
        id: 2,
        type: 'AI & Data Science',
        skills: 'Python, Matlab, Matplotlib, Pillow, Pandas, Digital Image Processing, ComputerVision, Genetic Algorithm, Deep Learning, MediaPipe'
    },
    {
        id: 3,
        type: 'Back-End',
        skills: 'NodeJS, NestJS, Kotlin, Ktor, Spring, Spring Boot, TypeOrm, PostgreSQL, MongoDB'
    },
    {
        id: 4,
        type: 'Front-End',
        skills: 'JavaScript, TypeScript, Reactjs, Redux, Redux-toolkit, Saga'
    },
    {
        id: 5,
        type: 'Agile Methodology',
        skills: 'Scrum, Kanban'
    },
    {
        id: 6,
        type: 'Tools',
        skills: 'Jira, SonarQube, SonarLint, GitKraken, SourceTree, OmniPlan, Notion Pages, Confluence, Retype, Netlify, Appium, Charles Proxy'
    },
    {
        id: 7,
        type: 'Languages',
        skills: 'English (intermediate), Persian (native)'
    },
];

export const contacts: Contact[] = [
    {
        id: 1,
        type: 'Phone',
        value: '+989908112783'
    },
    {
        id: 2,
        type: 'Email',
        value: 'mortezanedaei96@gmail.com'
    },
];