export function WorkExperience({ role }: {
    role: {
        title: string;
        dates: string;
        company: string;
        summary: string;
        achievements: string[];
    }
}) {
    return <div className="section">
        <span className="title">
            <h3>{role.title}</h3>
            <p>{role.dates}</p>
        </span>
        <p className="subtitle">{role.company}</p>
        <p>{role.summary}</p>
        <ul>
            {role.achievements.map((achievement) => <li>{achievement}</li>)}
        </ul>
    </div>
}