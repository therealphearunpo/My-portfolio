import { useState } from 'react'

const INITIAL = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    // IMPORTANT: Replace 'YOUR_FORM_ID' with the ID you get from Formspree.io
    const formspreeUrl = 'https://formspree.io/f/xeaejnwb'

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Get In Touch
            <span className="section-line"></span>
          </h2>
        </div>

        <div className="contact-card-dev">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>Let's Connect</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: '1.8rem' }}>
                I am currently open to software development internship opportunities and projects. Feel free to reach out directly via email or Telegram.
              </p>

              <a href="mailto:threalphearun@gmail.com" className="contact-link-item">
                <div className="contact-icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <div className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>EMAIL</div>
                  <div>threalphearun@gmail.com</div>
                </div>
              </a>

              <a href="https://t.me/+855969480891" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="contact-icon-box">
                  <i className="bi bi-telegram"></i>
                </div>
                <div>
                  <div className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>TELEGRAM</div>
                  <div>Phearun (+855 96 *** **91)</div>
                </div>
              </a>

              <div className="contact-link-item" style={{ cursor: 'default' }}>
                <div className="contact-icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <div className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LOCATION</div>
                  <div>Phnom Penh, Cambodia</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="mono-text mb-2" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>SOCIAL LINKS</div>
                <div className="d-flex gap-2">
                  <a href="https://github.com/therealphearunpo" target="_blank" rel="noopener noreferrer" className="btn-outline-dev">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/phearun-po-69a8323bb/" target="_blank" rel="noopener noreferrer" className="btn-outline-dev">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.2rem' }}>Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="mono-text" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem', display: 'block' }}>
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control-dev"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="mono-text" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem', display: 'block' }}>
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control-dev"
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <label htmlFor="subject" className="mono-text" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem', display: 'block' }}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-control-dev"
                  placeholder="Internship / Collaboration / Question"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="message" className="mono-text" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem', display: 'block' }}>
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  className="form-control-dev"
                  rows="4"
                  placeholder="Hi Phearun, ..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit" className="btn-primary-dev w-100 justify-content-center mt-3" disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <><i className="bi bi-send"></i> Send Message</>
                  )}
                </button>
                {status === 'success' && (
                  <div className="text-success mt-2" style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                    <i className="bi bi-check-circle"></i> Message sent successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="text-danger mt-2" style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                    <i className="bi bi-exclamation-circle"></i> Failed to send. Please check your form ID.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
