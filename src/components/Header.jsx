import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon"></span>
          CIT
        </Link>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className={isActive('/') ? 'active' : ''}>Top</Link></li>
            <li><Link to="/concept" className={isActive('/concept') ? 'active' : ''}>Concept</Link></li>
            <li><Link to="/menu" className={isActive('/menu') ? 'active' : ''}>Menu</Link></li>
            <li><Link to="/access" className={isActive('/access') ? 'active' : ''}>Access</Link></li>
          </ul>
        </nav>

        <button 
          className="hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
