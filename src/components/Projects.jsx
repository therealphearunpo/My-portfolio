const PROJECTS = [
  {
    title: 'Class Management System',
    description:
      'A web-based tool for managing student records, class lists, and tracking attendance with a clean, responsive user interface.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/therealphearunpo/class-management-system',
    live: 'https://therealphearunpo.github.io/class-management-system/',
  },
  {
    title: 'Data Structure Visualizer',
    description:
      'An interactive educational web application that visualizes Stack, Queue, and Bubble Sort operations step-by-step.',
    tags: ['JavaScript', 'Algorithms', 'CSS3'],
    github: 'https://github.com/therealphearunpo/data-structure-visualizer',
    live: 'https://therealphearunpo.github.io/data-structure-visualizer/',
  },
  {
    title: 'Weather Forecast App',
    description:
      'City weather lookup app fetching real-time weather metrics using asynchronous REST API requests and error handling.',
    tags: ['JavaScript', 'REST API', 'CSS3'],
    github: 'https://github.com/therealphearunpo',
    live: 'https://github.com/therealphearunpo',
  },
  {
    title: 'Personal Portfolio',
    description:
      'My developer portfolio built using React and Vite, showcasing projects, skills, and academic achievements at RUPP.',
    tags: ['React', 'Vite', 'CSS3'],
    github: 'https://github.com/therealphearunpo/Myportfilo',
    live: 'https://therealphearunpo.github.io/Myportfilo/',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured Projects
            <span className="section-line"></span>
          </h2>
        </div>

        <div className="row g-4">
          {PROJECTS.map((p) => (
            <div className="col-md-6" key={p.title}>
              <div className="project-card-dev">
                <div className="project-top">
                  <i className="bi bi-folder-symlink project-folder-icon"></i>
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" title="View Source Code">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={p.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </div>
                </div>

                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.description}</p>

                <div className="project-tags-dev">
                  {p.tags.map((t) => (
                    <span className="tag-item" key={t}>
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
