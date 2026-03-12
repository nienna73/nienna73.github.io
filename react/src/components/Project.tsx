export function Project({ project }: {
    project: {
        name: string;
        dates: string;
        team: string;
        description: string[];
        source?: {
            href: string;
            label: string;
        }
    }
}) {
    return <div className="section">
        <span className="title">
            <h3>{project.name}</h3>
            <p>{project.dates}</p>
        </span>
        <p className="subtitle">{project.team}</p>
        {project.description.map((paragraph) => <p className="description">{paragraph}</p>)}
        {project.source && <a href={project.source.href} target="_blank">{project.source.label}</a>}
    </div>
}