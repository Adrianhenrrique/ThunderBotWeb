import { Link } from 'react-router-dom';
import { FaBolt, FaDiscord, FaEnvelope, FaGithub } from 'react-icons/fa';
import { FiZap, FiMail, FiMessageSquare } from 'react-icons/fi';
import Style from './contact.module.css';

export default function Contact() {
  return (
    <main className={Style.contactContainer}>
      {/* Hero Section */}
      <section className={`${Style.heroSection} ${Style.thunderEffect}`}>
        <div className={Style.heroContent}>
          <div className={Style.titleWrapper}>
            <FiZap className={Style.thunderIcon} />
            <h1 className={Style.heroTitle}>CONTATO <span className={Style.thunderText}>THUNDERBOT</span></h1>
          </div>
          <p className={Style.heroSubtitle}>
            Precisa de ajuda? Envie um <span className={Style.highlight}>raio de mensagem</span> para nossa equipe
          </p>
        </div>
        <div className={Style.lightningEffect}></div>
      </section>

      {/* Contact Content */}
      <section className={Style.contactSection}>
        {/* Contact Card */}
        <div className={`${Style.contactCard} ${Style.thunderCard}`}>
          <h2 className={Style.sectionTitle}>
            <FaBolt className={Style.titleIcon} />
            ENVIE SUA MENSAGEM
          </h2>
          
          <form className={Style.contactForm}>
            <div className={Style.formGroup}>
              <label htmlFor="name" className={Style.formLabel}>Seu Nome</label>
              <input 
                type="text" 
                id="name" 
                className={Style.formInput}
                placeholder="Como podemos te chamar?"
              />
            </div>
            
            <div className={Style.formGroup}>
              <label htmlFor="email" className={Style.formLabel}>Seu Email</label>
              <input 
                type="email" 
                id="email" 
                className={Style.formInput}
                placeholder="Para onde devemos responder?"
              />
            </div>
            
            <div className={Style.formGroup}>
              <label htmlFor="message" className={Style.formLabel}>Sua Mensagem</label>
              <textarea 
                id="message" 
                className={`${Style.formInput} ${Style.formTextarea}`}
                rows="5"
                placeholder="Descreva como podemos te ajudar..."
              ></textarea>
            </div>
            
            <button type="submit" className={`${Style.submitButton} ${Style.thunderButton}`}>
              <FiZap className={Style.buttonIcon} />
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>

        {/* Info Card */}
        <div className={`${Style.infoCard} ${Style.thunderCard}`}>
          <h2 className={Style.sectionTitle}>
            <FaBolt className={Style.titleIcon} />
            OUTROS CANAIS
          </h2>
          
          <div className={Style.contactMethods}>
            <div className={Style.contactMethod}>
              <div className={Style.methodIconContainer}>
                <FaDiscord className={Style.methodIcon} />
              </div>
              <div className={Style.methodContent}>
                <h3 className={Style.methodTitle}>Servidor de Suporte</h3>
                <p className={Style.methodText}>Junte-se ao nosso servidor no Discord para ajuda imediata</p>
                <a 
                  href="https://discord.gg/seu-convite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={Style.methodLink}
                >
                  Entrar no Discord <span>→</span>
                </a>
              </div>
            </div>
            
            <div className={Style.contactMethod}>
              <div className={Style.methodIconContainer}>
                <FaEnvelope className={Style.methodIcon} />
              </div>
              <div className={Style.methodContent}>
                <h3 className={Style.methodTitle}>Email Oficial</h3>
                <p className={Style.methodText}>Envie um email para nossa equipe de suporte</p>
                <a 
                  href="mailto:contato@thunderbot.com" 
                  className={Style.methodLink}
                >
                  contato@thunderbot.com <span>→</span>
                </a>
              </div>
            </div>
            
            <div className={Style.contactMethod}>
              <div className={Style.methodIconContainer}>
                <FaGithub className={Style.methodIcon} />
              </div>
              <div className={Style.methodContent}>
                <h3 className={Style.methodTitle}>GitHub</h3>
                <p className={Style.methodText}>Reporte issues ou contribua com o projeto</p>
                <a 
                  href="https://github.com/seu-usuario/thunderbot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={Style.methodLink}
                >
                  Ver repositório <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}