const workExperience = [
    {
        "title": "Front-End Developer",
        "dates": "April 2023 - Present",
        "company": "samdesk",
        "summary": "I work on the Features Team, maintaining the user-facing dashboard and implementing new feature requests.",
        "achievements": [
            "Sorted my team’s Jira backlog, deleting outdated tasks and surfacing high-priority requests",
            "Regularly triage new requests, addressing the urgent ones immediately and placing the rest in an appropriate place in the backlog",
            "Installed Rollbar to increase our visibility into issues and bugs that arise",
            "Advocated for and championed unit tests across the project, increasing component test coverage from approximately 2.5% to 38.8% over 3 years",
            "Optimized our webpack configuration to improve initial load time and overall caching behaviour",
            "Took ownership of monthly Talk-o-Time, an informal resource-sharing and discussion opportunity for all development teams",
            "Implemented and iterated on a custom component library that delivers a consistent visual experience to users while providing increased accessibility support",
            "Regularly identified back-end schema changes that would impact front-end features before they shipped and became bugs",
            "Added a safeguard in a github action to ensure an important package doesn’t revert to an older version with a security vulnerability",
            "Led my team in scrum activities ensuring team members aren’t blocked or overwhelmed by tasks, team wins are celebrated, and friction points are addressed"
        ]
    },
    {
        "title": "Software Developer",
        "dates": "December 2020 - April 2023",
        "company": "ALTLab",
        "summary": "I worked closely with linguists and local Indigenous communities to document and preserve Indigenous languages.",
        "achievements": [
            "Supervised and mentored 3 interns and a group of students completing their capstone project at the University of Alberta",
            "Worked with the student group to convert the online dictionary of Plains Cree from a Django app to a React app while maintaining the sqlite database connections",
            "Designed a web service that allowed an Elder to verify the audio quality and pronunciation of previously recorded words and phrases",
            "Added the ability for the Elder to record words and phrases directly into our database, filling gaps in our collection without needing to transport extra equipment to her home",
            "Saved our progress in the recording validation process to a database and represented that progress visually, making it easy to identify where to start at the beginning of a shift",
            "Worked with linguists to ensure linguistic concepts were accurately represented and easy to understand for a variety of audiences",
            "Contributed to academic articles that chronicled the lab’s processes and achievements"
        ]
    },
    {
        "title": "Junior Developer",
        "dates": "April 2018 - December 2020",
        "company": "Full Circle Visuals",
        "summary": "I made custom software and hardware solutions to capture 360 degree timelapse footage.",
        "achievements": [
            "Automated the process of capturing 360 degree photos, coordinating 6 cameras and keeping them in synch with each other",
            "Developed a physical rig for all 6 cameras that also housed a small computer and a hardware interface to configure photo settings",
            "Worked directly with the company founder to ensure we were solving the right problem",
            "Used Python to stitch together photos as they were captured so we could get a preview of how the process was going, saving us from capturing hours of timelapse photos only to realize the settings were wrong",
            "Worked with Python, Phidgets, and gphoto2"
        ]
    },
    {
        "title": "Software Developer Co-op",
        "dates": "April 2019 - December 2019",
        "company": "Drivewyze",
        "summary": "I worked primarily on the rapid prototyping team, making tools for developers and proof-of-concepts for upcoming services.",
        "achievements": [
            "Wrote a test harness to highlight discrepancies between 3 internally defined dialects of LISP. The test harness was written in Python; the LISP dialects were written in JavaScript, C++, and .NET",
            "Configured the test harness to document itself and publish the documentation to the internal company wiki",
            "Connected the test harness to CI so any changes in behaviour could be flagged during development",
            "Delivered a Lunch ‘n’ Learn presentation about the test harness to ensure it could be maintained and remain useful after my internship",
            "Assisted team members in developing an ETL pipeline by ensuring all data that was present at point A was still present at point B",
            "Started a company-wide Ladies’ Lunch and delegated its organization to a coworker before finishing my internship"
        ]
    },
    {
        "title": "Junior Developer - Intern",
        "dates": "May 2018 - August 2018",
        "company": "coParenter",
        "summary": "I helped kick-off a rebuild of the mobile app in Flutter and Dart.",
        "achievements": [
            "Updated existing React app views",
            "Built new views and components using Flutter and Dart - both were in beta at the time, making me and my team mates temporary industry experts in both frameworks before they gained popularity",
            "Broke the project rewrite into manageable work tasks and user stories",
            "Collaborated with the design intern on UI and UX elements"
        ]
    }
];

const projects = [
    {
        "name": "Squawk",
        "dates": "Winter 2020",
        "team": "CMPUT 404",
        "description": ["CMPUT 404 is a web development course offered by the University of Alberta. The term-long project for this course is to create a stand-alone social network and integrate it with another team's project. My group named our project Squawk. I was largely responsible for making our site responsive with vanilla JavaScript, implementing front-end elements, and coordinating with others to integrate the front and back ends. I also wrote an extensive test suite for the project, including basic tests for the models and automated integration tests for the site functionality. The site is hosted on heroku and uses django for resource management. My team built the platform without the use of any templates or extensive libraries."],
        "source": {
            "label": "See the full readme and git history",
            "href": "https://github.com/CMPUT404-W2020/CMPUT404-project-socialdistribution"
        }
    },
    {
        "name": "Debbie's Dog Dilemma",
        "dates": "Winter 2018",
        "team": "Well Done Studios",
        "description": [
            "Debbie's Dog Dilemma, created by Well-Done Studios is the final project for the CMPUT 250 course as offered by the University of Alberta in winter 2018. In this game created using the RPG MV engine, you play as Debbie, an overwhelmed university student struggling to submit her assignment before the deadline. The problem? Her homework is stolen by a dog! Help her find her homework before the end of the weekend by completing a variety of puzzles across campus.",
            "I was the producer as well as one of three developers for Debbie's Dog Dilemma. As the producer, I helped keep the team on track for deadlines and submissions, and constantly reminded the team to keep the scope of our project in mind, earning me the honorary title of Scope Whisperer. As a developer, I worked on the puzzles in the game. This includes the basis of the initial snow puzzles, dodging cats in a small maze, navigating a poorly constructed building on campus, and playing the piano with your favourite characters from the game!",
            "Debbie's Dog Dilemma won multiple awards at the end-of-year awards ceremony, including Story and Design, Artwork, and Game of the Year."
        ],
        "source": {
            "label": "Download and play Debbie's Dog Dilemma",
            "href": "https://welldonestudios.itch.io/debbies-dog-dilemma"
        }
    },
    {
        "name": "SegFault",
        "dates": "Fall 2018",
        "team": "CMPUT 350",
        "description": [
            "I was one of four developers on this project where we were tasked to create a bot that would intelligently play StarCraft II (SCII). We played a Terran bot that employed a full rush strategy. I handled the attack patterns and micro-management. These functions determined if our units would attack the weakest enemy or the most dangerous enemy, applied stim-packs when appropriate, and employed kiting to increase the chances of success. SegFault, which is what we named our bot, won second in the class-wide SCII bot tournament held by the TAs at the end of the term. Due to the University's collaboration policy, the shared repo for this project is private."
        ]
    }
]

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hi there 👋");

    const innerExperienceElement = document.getElementById("innerExperienceSection");

    workExperience.forEach((role) => {
        const workExperienceDiv = document.createElement('div');
        workExperienceDiv.className = "section"

        const list = document.createElement('ul');
        role.achievements.forEach((achievement) => {
            const achievementLi = document.createElement("li");
            achievementLi.innerText = achievement;
            list.appendChild(achievementLi);
        });

        workExperienceDiv.innerHTML = `
            <span class="title">
                <h3>${role.title}</h3>
                <p>${role.dates}</p>
            </span>
            <p class="subtitle">${role.company}</p>
            <p>${role.summary}</p>
        `;

        workExperienceDiv.append(list);
        innerExperienceElement.append(workExperienceDiv);
    })

    const innerProjectsElement = document.getElementById("innerProjectsSection");

    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "section"

        projectDiv.innerHTML = `
            <span class="title">
                <h3>${project.name}</h3>
                <p>${project.dates}</p>
            </span>
            <p class="subtitle">${project.team}</p>
        `;

        project.description.forEach((paragraph) => {
            const paragraphEl = document.createElement("p");
            paragraphEl.className = "description";

            paragraphEl.innerText = paragraph;

            projectDiv.append(paragraphEl)
        });

        if (project.source) {
            const projectLink = document.createElement("a");
            projectLink.href = project.source.href;
            projectLink.target = "_blank";
            projectLink.innerText = project.source.label;

            projectDiv.append(projectLink);
        }


        innerProjectsElement.append(projectDiv);
    })
});