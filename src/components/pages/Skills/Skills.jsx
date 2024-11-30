

const Skills = () => {
    return (
        <div className={"container mt-30 mb-30"}>
            <h1>Skills</h1>
            <div className="skills-container">
                <div className="skill-category">
                    <h2 className={"mt-30 mb-30"}>Programming Languages</h2>
                    <ul className={"list"}>
                        <li className={"list__item"}><strong>C#:</strong> Advanced skills in building robust backend systems.</li>
                        <li className={"list__item"}><strong>JavaScript:</strong> Extensive experience in creating interactive web interfaces.</li>
                        <li className={"list__item"}><strong>SQL:</strong> Strong knowledge of database management and optimization.</li>
                        <li className={"list__item"}><strong>PHP:</strong> Proficient in server-side logic and web applications.</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h2 className={"mt-30 mb-30"}>Frontend Development</h2>
                    <ul className={"list"}>
                        <li className={"list__item"}><strong>React.js:</strong> Advanced knowledge of modern frontend development.</li>
                        <li className={"list__item"}><strong>Vue.js:</strong> Experience in building reactive web applications.</li>
                        <li className={"list__item"}><strong>HTML5 & CSS3:</strong> Expertise in creating responsive web layouts.</li>
                        <li className={"list__item"}><strong>jQuery:</strong> Proficient in enhancing user interfaces.</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h2 className={"mt-30 mb-30"}>Web Design</h2>
                    <ul className={"list"}>
                        <li className={"list__item"}><strong>Figma:</strong> Skilled in creating UI/UX prototypes.</li>
                        <li className={"list__item"}><strong>Affinity Designer:</strong> Proficient in vector-based design.</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h2 className={"mt-30 mb-30"}>Tools & Platforms</h2>
                    <ul className={"list"}>
                        <li className={"list__item"}><strong>Git:</strong> Expertise in version control workflows.</li>
                        <li className={"list__item"}><strong>Docker:</strong> Skilled in containerizing applications.</li>
                        <li className={"list__item"}><strong>CI/CD Tools:</strong> Knowledge of automated pipelines.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
