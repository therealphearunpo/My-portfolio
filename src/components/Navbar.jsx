import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          phearun<span className="accent">.po</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
              <button 
                className="theme-toggle" 
                onClick={() => setIsDark(!isDark)}
                aria-label="Toggle dark mode"
              >
                {isDark ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon-stars-fill"></i>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
