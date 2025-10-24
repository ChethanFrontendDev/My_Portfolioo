import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import NavigationBar from "./components/NavigationBar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className="bg-dark text-light">
        <section
          className="bg-dark text-light vh-100 d-flex align-items-center"
          id="home"
        >
          <div className="container">
            <h1 className="display-2 fw-bold">Chethankumar G</h1>
            <h5 className="text-white-50 fw-normal mb-2 fs-3 pb-3 pt-1">
              full stack dev
            </h5>
            <div
              className="mb-4"
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#28a745",
              }}
            ></div>
            <div className="mb-4" style={{ maxWidth: "700px" }}>
              <p className="fs-5">
                Passionate full-stack developer crafting intuitive digital
                experiences with modern technologies.
              </p>
              <p className="fs-5">
                Specializing in React, Node.js, and MongoDB to build scalable
                and user-centered applications.
              </p>
            </div>
            <div className="d-flex gap-3">
              <a href="#connect" className="btn btn-success py-2 px-4">
                Contact Me
              </a>
              <button className="btn btn-outline-secondary py-2 px-4">
                Resume
              </button>
            </div>
          </div>
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills" style={{ marginTop: "8rem" }}>
          <div className="container">
            <h2 className="display-5 fw-medium mb-2">Tech Stacks</h2>
            <p className="fs-5 pb-2 pt-1">Technologies and tools I work with</p>
            <div
              className="mb-4"
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#28a745",
              }}
            ></div>

            <div className="container mt-5">
              <div className="row gy-5 gx-3 fs-5">
                <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                  <li className="d-flex align-items-center gap-2">
                    <FaHtml5 className="text-info" /> HTML
                  </li>
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                  <li className="d-flex align-items-center gap-2">
                    <FaCss3Alt className="text-info" /> CSS
                  </li>
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                  <li className="d-flex align-items-center gap-2">
                    <FaBootstrap className="text-info" /> Bootstrap
                  </li>
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                  <li className="d-flex align-items-center gap-2">
                    <SiTailwindcss className="text-info" /> Tailwind CSS
                  </li>
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                  <li className="d-flex align-items-center gap-2">
                    <FaJsSquare className="text-info" /> JavaScript
                  </li>
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                  <li className="d-flex align-items-center gap-2">
                    <FaReact className="text-info" /> React
                  </li>
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                  {/* <i className="bi bi-node-plus-fill text-success"></i>  */}
                  <img
                    style={{ width: "1.3rem", height: "1.3rem" }}
                    src="https://nodejs.org/static/logos/jsIconGreen.svg"
                  />{" "}
                  Node.js
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                  <li className="d-flex align-items-center gap-2">
                    <SiExpress className="text-info" /> Express.js
                  </li>
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                  <i className="bi bi-database-fill text-success"></i> MongoDB
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                  <i className="bi bi-graph-up text-info"></i> Chart.js
                </div>
                <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                  <i className="bi bi-bell-fill text-warning"></i> Toast.js
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="connect"
          style={{ marginTop: "8rem" }}
          className="bg-dark text-light px-5"
        >
          <div className="container">
            <h2 className="display-5 fw-medium mb-2">Connect</h2>
            <p className="fs-5 pb-2 pt-1">
              Let's collaborate on something amazing together
            </p>
            <div
              className="mb-4"
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#28a745",
              }}
            ></div>
          </div>
          <div className="row">
            {/* Email Card */}
            <div className="col-md-6">
              <div
                className="card"
                style={{ backgroundColor: "#2b2b2bff", color: "white" }}
              >
                <div className="card-body">
                  <h2>
                    <a
                      href="mailto:chethankumar.dev@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                      className="d-flex align-items-center gap-3"
                    >
                      <AiOutlineMail size={32} /> Email
                    </a>
                  </h2>
                  <p className="text-secondary fs-5">
                    chethankumar.dev@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="col-md-6">
              <div
                className="card"
                style={{ backgroundColor: "#2b2b2bff", color: "white" }}
              >
                <div className="card-body">
                  <h2>
                    <a
                      href="https://github.com/ChethanFrontendDev"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                      className="d-flex align-items-center gap-3"
                    >
                      <FaGithub size={32} /> <span>GitHub</span>
                    </a>
                  </h2>
                  <p className="text-secondary fs-5">Follow on GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-dark text-light py-5">
        <div className="container text-center">
          <p className="fs-6 mb-1">
            &copy; 2025 My Portfolio • All rights reserved
          </p>
          <p className="fs-6 text-secondary mb-0">
            Built with Bootstrap and React.js
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
