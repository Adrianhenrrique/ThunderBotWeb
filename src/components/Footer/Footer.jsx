import { FaDiscord, FaGithub, FaHeart, FaBolt } from 'react-icons/fa'
import { FiZap, FiMail, FiShield, FiBook, FiStar, FiHelpCircle } from 'react-icons/fi'
import Style from './footer.module.css'

function Footer() {
  return (
    <footer className={Style.footer}>
      <div className={Style.footerTop}>
        {/* Efeito de raio no topo do footer */}
        <div className={Style.lightningEffect}></div>
      </div>

      <div className={Style.footerContainer}>
        {/* Seção Principal */}
        <div className={Style.footerSection}>
          <div className={Style.brandContainer}>
            <FiZap className={Style.thunderIcon} />
            <h3 className={Style.footerTitle}>THUNDERBOT</h3>
          </div>
          <p className={Style.footerDescription}>
            O bot de Discord com a <span className={Style.highlight}>força de um raio</span> para sua comunidade
          </p>
          <div className={Style.socialLinks}>
            <a 
              href="https://discord.gg/SEU_SERVIDOR_DISCORD" 
              target="_blank" 
              rel="noopener noreferrer"
              className={Style.socialLink}
              aria-label="Discord"
            >
              <FaDiscord className={Style.socialIcon} />
              <span>Discord</span>
            </a>
            <a 
              href="https://github.com/Adrianhenrrique/ThunderBotWeb" 
              target="_blank" 
              rel="noopener noreferrer"
              className={Style.socialLink}
              aria-label="GitHub"
            >
              <FaGithub className={Style.socialIcon} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Links Rápidos */}
        <div className={Style.footerSection}>
          <h4 className={Style.footerSubtitle}>
            <FiZap className={Style.sectionIcon} />
            LINKS RÁPIDOS
          </h4>
          <ul className={Style.footerLinks}>
            <li>
              <a href="/commands" className={Style.footerLink}>
                <FiZap className={Style.linkIcon} />
                Comandos
              </a>
            </li>
            <li>
              <a href="/documentation" className={Style.footerLink}>
                <FiBook className={Style.linkIcon} />
                Documentação
              </a>
            </li>
            <li>
              <a href="/premium" className={Style.footerLink}>
                <FiStar className={Style.linkIcon} />
                Premium
              </a>
            </li>
            <li>
              <a href="/status" className={Style.footerLink}>
                <FaBolt className={Style.linkIcon} />
                Status
              </a>
            </li>
          </ul>
        </div>

        {/* Suporte */}
        <div className={Style.footerSection}>
          <h4 className={Style.footerSubtitle}>
            <FiHelpCircle className={Style.sectionIcon} />
            SUPORTE
          </h4>
          <ul className={Style.footerLinks}>
            <li>
              <a href="/support" className={Style.footerLink}>
                <FaDiscord className={Style.linkIcon} />
                Servidor de Suporte
              </a>
            </li>
            <li>
              <a href="/contact" className={Style.footerLink}>
                <FiMail className={Style.linkIcon} />
                Contato
              </a>
            </li>
            <li>
              <a href="/premium#faq" className={Style.footerLink}>
                <FiHelpCircle className={Style.linkIcon} />
                FAQ
              </a>
            </li>
            <li>
              <a href="/report" className={Style.footerLink}>
                <FiShield className={Style.linkIcon} />
                Reportar Bug
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className={Style.footerSection}>
          <h4 className={Style.footerSubtitle}>
            <FiShield className={Style.sectionIcon} />
            LEGAL
          </h4>
          <ul className={Style.footerLinks}>
            <li>
              <a href="/terms" className={Style.footerLink}>
                Termos de Serviço
              </a>
            </li>
            <li>
              <a href="/privacy" className={Style.footerLink}>
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="/cookies" className={Style.footerLink}>
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Rodapé Inferior */}
      <div className={Style.footerBottom}>
        <div className={Style.footerBottomContent}>
          <p className={Style.copyright}>
            &copy; {new Date().getFullYear()} ThunderBot. Todos os direitos reservados.
          </p>
          <div className={Style.madeWith}>
            <span>Feito com</span>
            <FaHeart className={Style.heartIcon} />
            <span>e</span>
            <FiZap className={Style.thunderIconSmall} />
            <span>por você</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer