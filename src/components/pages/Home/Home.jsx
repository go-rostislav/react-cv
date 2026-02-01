import MyPhoto from "./assets/RH.jpg";
import "./Home.css"
import {Link, Route, Routes} from "react-router-dom";
import Certifications from "../Certifications/Certifications";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <div className="container flex justify-space-between mt-30 mb-30 mob h500">
        <div className={"align-self-center"}>
          <img className={"avatar border-radius-15"} src={MyPhoto} alt="Rostyslav Honcharov"/>
        </div>
        <div>
          <h1>Rostyslav Honcharov</h1>
          <div>
            <h3>OFFICEO s.r.o</h3>
              <div>
                  <strong>C# Developer / Full-stack Developer |<span> OFFICEO - Hostivice</span></strong>
                  <em> 01/2023 - Current </em>
              </div>
              <div className={"mt-15"}>
                  <Link to={"https://online.officeo.cz/"} target={"_blank"}><strong>E-commerce OFFICEO</strong></Link>
              </div>
            <ul className={"list"}>
              <li className={"list__item"}>Developed an e‑commerce website and intranet using C#, JavaScript, jQuery, HTML,
                  CSS, and SQL.
              </li>
            </ul>
          </div>
          <div className={"mt-30"}>
            <h3>CIS s.r.o</h3>
            <div>
                <strong>Junior Front-end Developer |</strong><span> CIS S.r.o - Jičín</span><em> 05/2022 - 12/2022</em>
            </div>
            <ul className={"list"}>
                <div className={"mt-15"}>
                    <Link to={"https://www.cis.cz/"} target={"_blank"}><strong>CIS s.r.o.</strong></Link>
                    <Link to={"https://www.kavon.cz/"} target={"_blank"}><strong> Kavon</strong></Link>
                    <Link to={"https://www.telemark.cz/"} target={"_blank"}><strong> Sagita(Telemark)</strong></Link>
                </div>
                <li className={"list__item"}>Developed different an e‑commerce website using: PHP, JavaScript, HTML, CSS, Vue.js, and SQL
                    databases.
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
