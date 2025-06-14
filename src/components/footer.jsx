import { FaDiscord, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa'
import Style from './styles/footer.module.css'

function Footer() {
  return (
    <footer className={Style.footer}>
      <div className={Style.footerContainer}>
        {/* Seção de Links Rápidos */}
        <div className={Style.footerSection}>
          <h3 className={Style.footerTitle}>ThunderBot</h3>
          <p className={Style.footerDescription}>
            O bot de Discord mais poderoso para sua comunidade
          </p>
          <div className={Style.socialLinks}>
            <a 
              href="https://discord.gg/SEU_SERVIDOR_DISCORD" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaDiscord className={Style.socialIcon} />
            </a>
            <a 
              href="https://github.com/Adrianhenrrique/ThunderBotWeb" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className={Style.socialIcon} />
            </a>
          </div>
        </div>

        {/* Links Úteis */}
        <div className={Style.footerSection}>
          <h4 className={Style.footerSubtitle}>Links</h4>
          <ul className={Style.footerLinks}>
            <li><a href="/commands" className={Style.footerLink}>Comandos</a></li>
            <li><a href="/documentation" className={Style.footerLink}>Documentação</a></li>
            <li><a href="/premium" className={Style.footerLink}>Premium</a></li>
            <li><a href="/status" className={Style.footerLink}>Status</a></li>
          </ul>
        </div>

        {/* Suporte */}
        <div className={Style.footerSection}>
          <h4 className={Style.footerSubtitle}>Suporte</h4>
          <ul className={Style.footerLinks}>
            <li><a href="/support" className={Style.footerLink}>Servidor de Suporte</a></li>
            <li><a href="/contact" className={Style.footerLink}>Contato</a></li>
            <li><a href="/faq" className={Style.footerLink}>FAQ</a></li>
            <li><a href="/report" className={Style.footerLink}>Reportar Bug</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className={Style.footerSection}>
          <h4 className={Style.footerSubtitle}>Legal</h4>
          <ul className={Style.footerLinks}>
            <li><a href="/terms" className={Style.footerLink}>Termos de Serviço</a></li>
            <li><a href="/privacy" className={Style.footerLink}>Política de Privacidade</a></li>
            <li><a href="/cookies" className={Style.footerLink}>Cookies</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className={Style.footerBottom}>
        <p className={Style.copyright}>
          &copy; {new Date().getFullYear()} ThunderBot. Todos os direitos reservados.
        </p>
        <p className={Style.madeWith}>
          Feito com <FaHeart className={Style.heartIcon} /> por você
        </p>
      </div>
    </footer>
  )
}

export default Footer