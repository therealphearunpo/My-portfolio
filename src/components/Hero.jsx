import { useState, useEffect } from 'react'

const ROLES = ['IT Engineering Student', 'C C++ Programmer', 'Java Developer', 'JavaScript Enthusiast', 'Python Developer']

function Hero() {
  const [roleText, setRoleText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIdx % ROLES.length]
    const speed = deleting ? 35 : 80

    const timer = setTimeout(() => {
      if (!deleting && roleText === current) {
        setTimeout(() => setDeleting(true), 1400)
      } else if (deleting && roleText === '') {
        setDeleting(false)
        setRoleIdx((prev) => (prev + 1) % ROLES.length)
      } else {
        setRoleText(
          deleting ? current.slice(0, roleText.length - 1) : current.slice(0, roleText.length + 1)
        )
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [roleText, deleting, roleIdx])

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Available for Software Engineering Internships</span>
            </div>

            <h1 className="hero-title">Phearun Po</h1>
            <div className="hero-subtitle">
              <span>{roleText}</span>
              <span className="mono-text" style={{ color: 'var(--accent-emerald)' }}>|</span>
            </div>

            <p className="hero-bio">
              Year 2 student pursuing a Bachelor of Engineering in Information Technology Engineering at the RUPP.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary-dev">
                <i className="bi bi-terminal-fill"></i> View Projects
              </a>
              <a href="#contact" className="btn-outline-dev">
                <i className="bi bi-envelope"></i> Contact Me
              </a>
              <a href="/my_cv.html" target="_blank" rel="noopener noreferrer" className="btn-outline-dev">
                <i className="bi bi-file-earmark-person"></i> Resume (CV)
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-avatar-box">
              <div>
                <div className="avatar-frame">
                  <img src="/avatar.jpg" alt="Po Phearun" />
                </div>
                <div className="code-box">
                  <div><span className="kw">const</span> <span className="prop">developer</span> = &#123;</div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="prop">name</span>: <span className="str">"Po Phearun"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="prop">university</span>: <span className="str">"RUPP"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="prop">faculty</span>: <span className="str">"Faculty of Engineering"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="prop">degree</span>: <span className="str">"B.Eng. IT Engineering"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="prop">year</span>: <span className="num">2</span>,
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="prop">status</span>: <span className="str">"Open to Internships"</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
