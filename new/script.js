let experience = [
    {
        "title": "Front-End Developer",
        "dates": "April 2023 - Present",
        "company": "samdesk",
        "summary": "I work on the Features Team, maintaining the user-facing dashboard and implementing new feature requests.",
        "achievements": [
            "achievement one",
            "achievement the second"
        ]
    },
    {
        "title": "Software Developer",
        "dates": "December 2020 - April 2023",
        "company": "ALTLab",
        "summary": "Summary of my work experience at ALTLab",
        "achievements": [
            "achievement one",
            "achievement the second"
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hi there 👋");

    experience.forEach((role) => {
        const workExperienceSection = document.createElement('div');
        workExperienceSection.className = "workExperienceSection"

        const list = document.createElement('ul');
        role.achievements.forEach((achievement) => {
            const achievementLi = document.createElement("li");
            achievementLi.innerText = achievement;
            list.appendChild(achievementLi);
        });

        workExperienceSection.innerHTML = `
            <span class="workExperienceTitle">
                <h3>${role.title}</h3>
                <p>${role.dates}</p>
            </span>
            <p class="companyName">${role.company}</p>
            <p>${role.summary}</p>
        `;

        document.getElementById("innerExperienceSection").append(workExperienceSection);
        document.getElementById("innerExperienceSection").append(list);
    })
});