import "./AboutMe.css"

const AboutMe = () => {
    return (
        <div className={"container mt-30 mb-30 h500"}>
            <h1>About Me</h1>
            <div>
                Hello! <br/>
                My name is <strong>Rostyslav Honcharov,</strong> and I am a developer with experience in creating web applications and internal systems, leveraging modern technologies to deliver outstanding results.
            </div>
            <div>
                I was born in Ukraine, and I currently live and work in Kladno, Czech Republic.
            </div>
            <div>
                My professional motto is <strong>to grow, create, and share knowledge.</strong>
                Through my experience working at international companies such as <strong>CIS s.r.o</strong> and <strong>OFFICEO,</strong>
                I have gained strong skills in programming, database management, and web design.
            </div>
            <div>
                To strengthen my expertise, I have completed:
                <ul className={"list"}>
                    <li className={"list__item"}><strong>Meta’s Professional Certificate in React Frontend Development,</strong> where I mastered advanced React concepts and frontend development best practices.</li>
                    <li className={"list__item"}><strong>Gopass C# Developer Training,</strong> focusing on building robust applications with C# and .NET.</li>
                </ul>
            </div>
            <div>
                I am always eager to learn new things and embrace challenges that help me grow as a professional.
            </div>
            <div>
                In my free time, I enjoy:
                <ul className={"list"}>
                    <li className={"list__item"}>Exploring new technologies and experimenting with them.</li>
                    <li className={"list__item"}>Working on personal projects.</li>
                    <li className={"list__item"}>Enjoying the culture and nature of the Czech Republic.</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutMe;
