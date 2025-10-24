import { useState } from "react";

const NavigationBar = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "connect", label: "Connect", href: "#connect" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed border-bottom w-100 z-1">
        <div className="container-fluid px-5">
          <a className="navbar-brand ps-3" href="/">
            <span className="text-success fw-medium fs-5 me-1">&lt;&gt;</span>
            <span className="fw-medium fs-5">My Portfolio</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {menuItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    className={`nav-link ${active === item.id ? "active" : ""}`}
                    href={item.href}
                    onClick={() => setActive(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavigationBar;
