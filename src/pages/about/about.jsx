import { Link } from 'react-router-dom';
import { FaBolt, FaServer, FaUserClock, FaCodeBranch } from 'react-icons/fa';
import { FiZap, FiUsers, FiClock } from 'react-icons/fi';
import Style from './about.module.css';

export default function About() {
  return (
    <main className={Style.aboutContainer}>
      {/* Hero Section com efeito de tempestade */}
      <section className={`${Style.heroSection} ${Style.thunderEffect}`}>
        <div className={Style.heroContent}>
          <div className={Style.titleWrapper}>
            <FiZap className={Style.thunderIcon} />
            <h1 className={Style.heroTitle}>SOBRE O <span className={Style.thunderText}>THUNDERBOT</span></h1>
          </div>
          <p className={Style.heroSubtitle}>
            O bot de Discord com a <span className={Style.highlight}>força de um raio</span> para sua comunidade
          </p>
          <Link to="/commands" className={Style.heroLink}>
            Explore os Comandos
          </Link>
        </div>
        <div className={Style.lightningEffect}></div>
      </section>

      {/* Seção Sobre */}
      <section className={Style.aboutSection}>
        <div className={`${Style.aboutCard} ${Style.thunderCard}`}>
          <h2 className={Style.sectionTitle}>
            <FaBolt className={Style.titleIcon} />
            NOSSA HISTÓRIA
          </h2>
          <p className={Style.aboutText}>
            Nascido em 2025, o <strong>ThunderBot</strong> surgiu como um raio no céu claro - rápido, poderoso e 
            inovador. Criado para eletrizar as comunidades brasileiras do Discord, combinamos ferramentas de 
            moderação com a força de um trovão e funcionalidades que brilham como relâmpagos.
          </p>
          
          <div className={Style.statsGrid}>
            <div className={`${Style.statItem} ${Style.thunderStat}`}>
              <FaCodeBranch className={Style.statIcon} />
              <span className={Style.statNumber}>50+</span>
              <span className={Style.statLabel}>Comandos</span>
              <Link to="/commands" className={Style.statLink}>
                Saiba mais
              </Link>
              <div className={Style.statLightning}></div>
            </div>
            <div className={`${Style.statItem} ${Style.thunderStat}`}>
              <FaServer className={Style.statIcon} />
              <span className={Style.statNumber}>500+</span>
              <span className={Style.statLabel}>Servidores</span>
              <Link to="/servers" className={Style.statLink}>
                Veja os servidores
              </Link>
              <div className={Style.statLightning}></div>
            </div>
            <div className={`${Style.statItem} ${Style.thunderStat}`}>
              <FaUserClock className={Style.statIcon} />
              <span className={Style.statNumber}>24/7</span>
              <span className={Style.statLabel}>Online</span>
              <Link to="/status" className={Style.statLink}>
                Status do bot
              </Link>
              <div className={Style.statLightning}></div>
            </div>
          </div>
        </div>

        {/* Seção Time */}
        <div className={`${Style.teamCard} ${Style.thunderCard}`}>
          <h2 className={Style.sectionTitle}>
            <FaBolt className={Style.titleIcon} />
            NOSSO TIME
          </h2>
          <div className={Style.teamGrid}>
            <div className={Style.teamMember}>
              <div className={Style.photoContainer}>
                <img 
                  src="https://i.ibb.co/W4xbMbcT/compressed-fotor-202506109936.webp" 
                  alt="Adrian Henrique" 
                  className={Style.memberPhoto}
                />
                <div className={Style.photoLightning}></div>
              </div>
              <h3 className={Style.memberName}>Adrian Henrique</h3>
              <p className={Style.memberRole}>Desenvolvedor Principal</p>
              <div className={Style.memberStats}>
                <div className={Style.memberStat}>
                  <FiZap className={Style.memberStatIcon} />
                  <span>+1000 linhas de código</span>
                </div>
                <div className={Style.memberStat}>
                  <FiUsers className={Style.memberStatIcon} />
                  <span>+5000 usuários impactados</span>
                </div>
                <div className={Style.memberStat}>
                  <FiClock className={Style.memberStatIcon} />
                  <span>24/7 dedicado</span>
                </div>
              </div>
              <Link to="/team" className={Style.memberLink}>
                Conheça o time
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}