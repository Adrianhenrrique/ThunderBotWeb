import { FaDiscord, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa'
import Style from './about.module.css'

export default function About() {
  return (
    <main className={Style.aboutContainer}>
      <section className={Style.heroSection}>
        <div className={Style.heroContent}>
          <h1 className={Style.heroTitle}>Sobre o ThunderBot</h1>
          <p className={Style.heroSubtitle}>O bot de Discord mais poderoso para sua comunidade</p>
        </div>
      </section>

      <section className={Style.aboutSection}>
        <div className={Style.aboutCard}>
          <h2 className={Style.sectionTitle}>Nossa História</h2>
          <p className={Style.aboutText}>
            O ThunderBot nasceu em 2025 da necessidade de ter um bot completo que realmente atendesse às necessidades
            das comunidades brasileiras no Discord. Combinando moderação eficiente com recursos divertidos, criamos uma
            solução tudo-em-um.
          </p>
          
          <div className={Style.statsGrid}>
            <div className={Style.statItem}>
              <FaCode className={Style.statIcon} />
              <span className={Style.statNumber}>50+</span>
              <span className={Style.statLabel}>Comandos</span>
            </div>
            <div className={Style.statItem}>
              <FaDiscord className={Style.statIcon} />
              <span className={Style.statNumber}>500+</span>
              <span className={Style.statLabel}>Servidores</span>
            </div>
            <div className={Style.statItem}>
              <FaGithub className={Style.statIcon} />
              <span className={Style.statNumber}>24/7</span>
              <span className={Style.statLabel}>Online</span>
            </div>
          </div>
        </div>

        <div className={Style.teamCard}>
          <h2 className={Style.sectionTitle}>Nosso Time</h2>
          <div className={Style.teamGrid}>
            <div className={Style.teamMember}>
              <img 
                src="https://i.ibb.co/W4xbMbcT/compressed-fotor-202506109936.webp" 
                alt="Adrian Henrique" 
                className={Style.memberPhoto}
              />
              <h3 className={Style.memberName}>Adrian Henrique</h3>
              <p className={Style.memberRole}>Desenvolvedor Principal</p>
            </div>
            {/* Adicione mais membros conforme necessário */}
          </div>
        </div>
      </section>
    </main>
  )
}