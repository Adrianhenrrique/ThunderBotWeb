import Style from './header.module.css'
import iconBot from '../../assets/logo.png'
import { useState, useEffect } from 'react'
import { FaBolt, FaDiscord } from 'react-icons/fa'
import { FiZap, FiHome, FiUser, FiMail, FiBook } from 'react-icons/fi'

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
      {/* Efeito de raio no topo */}
      <div className={Style.lightningTop}></div>
      
      <div className={Style.header__container}>
        <div className={Style.header__left}>
          <a href="/" className={Style.logo_link} aria-label="Página inicial">
            <img 
              src={iconBot} 
              alt="Logo ThunderBot" 
              className={Style.header__logo_png} 
              width="60"
              height="60"
              loading="lazy"
            />
            <span className={Style.logo_text}>THUNDER<span className={Style.logo_highlight}>BOT</span></span>
          </a>
          
          <button 
            className={`${Style.mobile_menu_button} ${mobileMenuOpen ? Style.open : ''}`}
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
              <li>
                <a href="/" className={Style.header__nav__link} onClick={() => setMobileMenuOpen(false)}>
                  <FiHome className={Style.nav_icon} />
                  <span>Home</span>
                  <div className={Style.link_lightning}></div>
                </a>
              </li>
              <li>
                <a href="/about" className={Style.header__nav__link} onClick={() => setMobileMenuOpen(false)}>
                  <FiUser className={Style.nav_icon} />
                  <span>Sobre</span>
                  <div className={Style.link_lightning}></div>
                </a>
              </li>
              <li>
                <a href="/contact" className={Style.header__nav__link} onClick={() => setMobileMenuOpen(false)}>
                  <FiMail className={Style.nav_icon} />
                  <span>Contato</span>
                  <div className={Style.link_lightning}></div>
                </a>
              </li>
              <li>
                <a href="/docs" className={Style.header__nav__link} onClick={() => setMobileMenuOpen(false)}>
                  <FiBook className={Style.nav_icon} />
                  <span>Documentação</span>
                  <div className={Style.link_lightning}></div>
                </a>
              </li>
            </ul>
          </nav>
          
          <div className={Style.header__actions}>
            <a 
              href="https://discord.gg/seu-convite" 
              target="_blank" 
              rel="noopener noreferrer"
              className={Style.discord_button}
            >
              <FaDiscord className={Style.discord_icon} />
              <span>Servidor</span>
            </a>
            <button className={Style.login_button}>
              <FiZap className={Style.login_icon} />
              <span>Entrar</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header