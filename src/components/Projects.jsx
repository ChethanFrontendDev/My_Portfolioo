const Projects = () => {
  const projectsData = [
    {
      title: "E - Commerce Website",
      description:
        "A clothing e-commerce platform with sections for Men, Women, Kids, and Seniors, offering seamless browsing, favorites, cart, and checkout for a smooth shopping experience.",
      image:
        "https://plus.unsplash.com/premium_photo-1699973055471-634c3fc40347?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=869",
      tech: [
        "React",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Toast.js",
      ],
      demo: "https://drive.google.com/file/d/1iCxBhtq0YNcthXIcKQ5WHYpfcSYWyYlr/view?usp=sharing",
      code: "https://github.com/ChethanFrontendDev/FE-Major-Project-1",
    },
    {
      title: "Anvaya CRM",
      description:
        "Anvaya CRM is a lead management app that allows adding, editing, and deleting leads and agents, with the ability to comment on leads for seamless team collaboration.",
      image:
        "https://plus.unsplash.com/premium_photo-1661765270050-c32ec060cb4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=800",
      tech: ["React", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
      demo: "https://drive.google.com/file/d/1iCxBhtq0YNcthXIcKQ5WHYpfcSYWyYlr/view?usp=drive_link",
      code: "https://github.com/ChethanFrontendDev/FE_Major_Project-2",
    },
  ];

  return (
    <>
      <div className="container my-5">
        <h2 className="display-5 fw-medium mb-2">Projects</h2>
        <p className="fs-5 pb-2 pt-1">
          Building solutions that solve real-world problems
        </p>
        <div
          className="mb-4"
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#28a745",
          }}
        ></div>

        <div className="row g-4 mt-2">
          {projectsData.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card  h-100 card-hover"
                style={{
                  backgroundColor: "#1e1e1e",
                  color: "white",
                }}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: "14rem", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge bg-secondary me-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto d-flex gap-3 justify-centent-end">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light btn-sm d-flex align-items-center gap-2"
                    >
                      <i className="bi bi-eye"></i> Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light btn-sm d-flex align-items-center gap-2"
                    >
                      <i className="bi bi-code-slash"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
