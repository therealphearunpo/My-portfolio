function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      icon: 'bi bi-code-slash',
      skills: [
        { name: 'C', icon: 'devicon-c-plain' },
        { name: 'C++', icon: 'devicon-cplusplus-plain' },
        { name: 'JavaScript (ES6+)', icon: 'fab fa-js' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Java', icon: 'fab fa-java' },
      ],
    },
    {
      title: 'Web Technologies',
      icon: 'bi bi-window-stack',
      skills: [
        { name: 'React', icon: 'fab fa-react' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Bootstrap 5', icon: 'fab fa-bootstrap' },
        { name: 'Vite', icon: 'bi bi-lightning-charge' },
      ],
    },
    {
      title: 'Tools & Concepts',
      icon: 'bi bi-tools',
      skills: [
        { name: 'Data Structures & Algorithms', icon: 'bi bi-diagram-3' },
        { name: 'Git & GitHub', icon: 'fab fa-github' },
        { name: 'REST APIs', icon: 'bi bi-cloud-arrow-down' },
        { name: 'Computer Networking', icon: 'fas fa-network-wired' },
      ],
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Technical Skills & Stack
            <span className="section-line"></span>
          </h2>
        </div>

        <div className="row g-4">
          {categories.map((cat) => (
            <div className="col-lg-4 col-md-6" key={cat.title}>
              <div className="stack-category">
                <div className="stack-category-title">
                  <i className={cat.icon}></i> {cat.title}
                </div>
                <div className="tech-grid">
                  {cat.skills.map((s) => (
                    <div className="tech-chip" key={s.name}>
                      <i className={s.icon}></i> {s.name}
                    </div>
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

export default Skills
