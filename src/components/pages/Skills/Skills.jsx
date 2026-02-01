import "./Skills.css";
const Skills = () => {
    return (
        <div className={"container mob mt-30 mb-30"}>
            <h1>Skills</h1>
            <div className="skills-container">
                <div className="skill-category">
                    <h2 className={"mt-30 mb-30"}>Programming Languages</h2>
                    <ul className={"list"}>
                        <li className={"list__item"}><strong>C#</strong></li>
                        <li className={"list__item"}><strong>JavaScript</strong></li>
                        <li className={"list__item"}><strong>SQL</strong></li>
                        <li className={"list__item"}><strong>PHP</strong></li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h2 className={"mt-30 mb-30"}>Frontend Development</h2>
                    <ul className={"list"}>
                        <li className={"list__item"}><strong>React.js</strong></li>
                        <li className={"list__item"}><strong>Vue.js</strong></li>
                        <li className={"list__item"}><strong>HTML5 & CSS3</strong></li>
                        <li className={"list__item"}><strong>jQuery</strong></li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h2 className={"mt-30 mb-30"}>Web Design</h2>
                    <ul className={"list"}>
                        <li className={"list__item"}><strong>Figma</strong></li>
                        <li className={"list__item"}><strong>Affinity Designer</strong></li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h2 className={"mt-30 mb-30"}>Tools & Platforms</h2>
                    <ul className={"list"}>
                        <li className={"list__item"}><strong>Git</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
