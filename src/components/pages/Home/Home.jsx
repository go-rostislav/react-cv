import MyPhoto from "./assets/my-photo.jpg";
import "./Home.css"
import {Link, Route, Routes} from "react-router-dom";
import Certifications from "../Certifications/Certifications";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <div className="container flex justify-space-between mt-30 mb-30 mob">
        <div className={"align-self-center"}>
          <img className={"avatar border-radius-15"} src={MyPhoto} alt="Rostyslav Honcharov"/>
        </div>
        <div>
          <h1>Rostyslav Honcharov</h1>
          <div>
            <h3>OFFICEO s.r.o</h3>
            <em>C# Developer / Full-stack Developer</em>
            <h3>January 2024 — Present</h3>
            <ul className={"list"}>
              <li className={"list__item"}>Developing and maintaining internal company applications aimed at improving
                operational efficiency.
              </li>
              <li className={"list__item"}>Utilizing a tech stack that includes C#, JavaScript, jQuery, HTML, CSS, and
                SQL databases.
              </li>
              <li className={"list__item"}>Optimized database operations by refining complex queries and data
                structures.
              </li>
              <li className={"list__item"}>Participating in application architecture design, implementing new features,
                and enhancing the user interface.
              </li>
              <li className={"list__item"}>Collaborating with various departments to align projects with business
                goals.
              </li>
              <li className={"list__item"}>Working with designers to create visually appealing and user-friendly
                interfaces using Figma and Affinity Designer.
              </li>
            </ul>
          </div>
          <div className={"mt-30"}>
            <h3>CIS s.r.o</h3>
            <em>Junior Front-end Developer</em>
            <h3>May 2023 — December 2023 (7 months)</h3>
            <ul className={"list"}>
              <li className={"list__item"}>Contributed to the development and maintenance of complex web projects for
                diverse clients.
              </li>
              <li className={"list__item"}>Worked with a wide range of modern technologies: PHP, JavaScript, HTML, CSS,
                Vue.js, Docker, and SQL databases.
              </li>
              <li className={"list__item"}>Enhanced application performance and implemented new functional modules.</li>
              <li className={"list__item"}>Collaborated closely with designers, QA engineers, and project managers to
                ensure high-quality deliverables.
              </li>
              <li className={"list__item"}>Participated in UI/UX design processes using Figma and Affinity Designer
                tools.
              </li>
            </ul>
          </div>
          <div className={"mt-30"}>
            <Routes>
              <Route path="/certification" element={<Certifications />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
            <Link className={"button__link"} to="/certification">Certification</Link>
            <Link className={"button__link"} to="/skills">Skills</Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
