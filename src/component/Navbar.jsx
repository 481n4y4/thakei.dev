import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 w-full z-50 border-b transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-bg-base)',
        borderColor: 'var(--color-border-grid)'
      }}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Logo size="small" />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 text-sm" style={{ color: 'var(--color-text-primary)' }}>
          <li>
            <Link 
              to={"/"} 
              className="transition-colors duration-300 hover:opacity-80"
              style={{ 
                color: 'var(--color-text-secondary)',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-blue)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to={"/about"} 
              className="transition-colors duration-300 hover:opacity-80"
              style={{ 
                color: 'var(--color-text-secondary)',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-blue)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to={"/certificate"} 
              className="transition-colors duration-300 hover:opacity-80"
              style={{ 
                color: 'var(--color-text-secondary)',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-blue)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              Certificate
            </Link>
          </li>
          <li>
            <Link 
              to={"/projects"} 
              className="transition-colors duration-300 hover:opacity-80"
              style={{ 
                color: 'var(--color-text-secondary)',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-blue)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              Projects
            </Link>
          </li>
        </ul>

        {/* Ikon Bars untuk Mobile */}
        <div
          className="md:hidden text-2xl cursor-pointer transition-colors duration-300"
          style={{ color: 'var(--color-accent-blue)' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <ul 
          className="md:hidden w-60 min-h-screen flex flex-col items-end gap-6 px-8 py-6 absolute right-0 border-l"
          style={{
            backgroundColor: 'rgba(17, 19, 24, 0.95)',
            borderColor: 'var(--color-border-grid)',
            color: 'var(--color-text-primary)'
          }}
        >
          <li>
            <Link 
              to={"/"} 
              className="transition-colors duration-300 hover:opacity-80"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-blue)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to={"/about"} 
              className="transition-colors duration-300 hover:opacity-80"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-blue)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to={"/certificate"} 
              className="transition-colors duration-300 hover:opacity-80"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-blue)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              Certificate
            </Link>
          </li>
          <li>
            <Link 
              to={"/projects"} 
              className="transition-colors duration-300 hover:opacity-80"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-blue)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              Projects
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
