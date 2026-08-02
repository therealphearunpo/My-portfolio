function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About Me
            <span className="section-line"></span>
          </h2>
        </div>

        <div className="info-card">
          <div className="row g-4">
            <div className="col-lg-7">
              <p className="about-paragraph">
                I am a 2nd-year student pursuing a Bachelor of Engineering in Information Technology Engineering at the RUPP.
                My programming journey started with C and C++, where I built strong foundations in object-oriented programming, data structures, and memory management.
              </p>
              <p className="about-paragraph">
                As I progressed, I discovered my passion for web development. I enjoy taking ideas and building functional, 
                interactive applications using JavaScript and React. Whether it's creating a class management tool or visualizing 
                sorting algorithms step-by-step, I enjoy solving practical problems with code.
              </p>
              <p className="about-paragraph">
                I'm actively seeking an internship opportunity in software development or web engineering where I can learn from experienced engineers and contribute to real projects.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="quick-facts">
                <div className="fact-item">
                  <div className="fact-label">University</div>
                  <div className="fact-value">RUPP - Faculty of Engineering</div>
                </div>

                <div className="fact-item">
                  <div className="fact-label">Degree</div>
                  <div className="fact-value">Bachelor of Engineering in IT Engineering</div>
                </div>

                <div className="fact-item">
                  <div className="fact-label">Academic Standing</div>
                  <div className="fact-value">Year 2 Student</div>
                </div>

                <div className="fact-item">
                  <div className="fact-label">Location</div>
                  <div className="fact-value">Phnom Penh, Cambodia</div>
                </div>

                <div className="fact-item">
                  <div className="fact-label">Languages</div>
                  <div className="fact-value">Khmer & English</div>
                </div>

                <div className="fact-item">
                  <div className="fact-label">Focus</div>
                  <div className="fact-value">Software Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
