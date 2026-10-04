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
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'system';
  });

  useEffect(() => {
    const applyTheme = (t) => {
      const isDark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    };
    
    applyTheme(theme);
    localStorage.setItem('theme', theme);

    if (theme === 'system') {
      const query = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme('system');
      query.addEventListener('change', listener);
      return () => query.removeEventListener('change', listener);
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
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
            <li className="nav-item position-relative ms-lg-3 mt-3 mt-lg-0 d-flex align-items-center">
              <button 
                className="theme-settings-btn"
                onClick={() => setSettingsOpen(!settingsOpen)}
                aria-label="Theme Settings"
              >
                <i className="bi bi-gear-fill"></i> Settings
              </button>
              
              {settingsOpen && (
                <div className="theme-dropdown-menu">
                  <div className="theme-dropdown-header">Appearance</div>
                  <button className={`theme-dropdown-item ${theme === 'light' ? 'active' : ''}`} onClick={() => { setTheme('light'); setSettingsOpen(false); }}>
                    <i className="bi bi-sun"></i> Light Mode
                  </button>
                  <button className={`theme-dropdown-item ${theme === 'dark' ? 'active' : ''}`} onClick={() => { setTheme('dark'); setSettingsOpen(false); }}>
                    <i className="bi bi-moon-stars"></i> Dark Mode
                  </button>
                  <button className={`theme-dropdown-item ${theme === 'system' ? 'active' : ''}`} onClick={() => { setTheme('system'); setSettingsOpen(false); }}>
                    <i className="bi bi-display"></i> System Default
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
