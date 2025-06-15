import Style from './header.module.css'
import iconBot from '../../assets/logo.png'
import { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${Style.header} ${isScrolled ? Style.scrolled : ''}`}>
      <div className={Style.header__container}>
        <div className={Style.header__left}>
          <a href="/" className={Style.logo_link} aria-label="Página inicial">
            <img 
              src={iconBot} 
              alt="Logo da aplicação" 
              className={Style.header__logo_png} 
              width="60"
              height="60"
              loading="lazy"
            />
          </a>
          
          <button 
            className={Style.mobile_menu_button}
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={Style.mobile_menu_icon}></span>
          </button>
        </div>

        <div className={`${Style.header__right} ${mobileMenuOpen ? Style.menu_open : ''}`}>
          <nav className={Style.header__nav} aria-label="Menu principal">
            <ul className={Style.header__nav_ul}>
              <li><a href="/" className={Style.header__nav__link} onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="/about" className={Style.header__nav__link} onClick={() => setMobileMenuOpen(false)}>Sobre</a></li>
              <li><a href="/contact" className={Style.header__nav__link} onClick={() => setMobileMenuOpen(false)}>Contato</a></li>
              <li><a href="/docs" className={Style.header__nav__link} onClick={() => setMobileMenuOpen(false)}>Documentação</a></li>
            </ul>
          </nav>
          
          <div className={Style.header__actions}>
            <button className={Style.header__button}>
              <span className={Style.header__button_text}>Entrar</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header