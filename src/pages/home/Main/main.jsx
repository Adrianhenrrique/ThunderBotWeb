import { useState, useEffect } from 'react'
import styles from './Main.module.css'
import { 
  FiZap, FiSettings, FiShield, FiMusic, 
  FiMessageSquare, FiUserPlus, FiBarChart2,
  FiServer, FiUsers, FiCommand, FiClock
} from 'react-icons/fi'
import { FaBolt } from 'react-icons/fa'

const Main = () => {
  const [stats, setStats] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isRaining, setIsRaining] = useState(true)

  useEffect(() => {
    const fetchBotStats = async () => {
      setIsLoading(true)
      try {
        // Simulação de API
        await new Promise(resolve => setTimeout(resolve, 800))
        
        setStats({
          servers: 128,
          users: 5243,
          commands: 24,
          uptime: '99.8%'
        })
      } catch (error) {
        console.error("Error loading stats:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBotStats()

    // Efeito de chuva/relâmpagos
    const interval = setInterval(() => {
      setIsRaining(prev => !prev)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <FiZap className={styles.featureIcon} />,
      title: "Velocidade do Raio",
      description: "Resposta instantânea a todos os comandos"
    },
    {
      icon: <FiShield className={styles.featureIcon} />,
      title: "Moderação Poderosa",
      description: "Ferramentas de moderação com a força de um trovão"
    },
    {
      icon: <FiMusic className={styles.featureIcon} />,
      title: "Música Eletrizante",
      description: "Sistema de música de alta qualidade"
    },
    {
      icon: <FiMessageSquare className={styles.featureIcon} />,
      title: "Comandos Personalizados",
      description: "Crie comandos únicos para seu servidor"
    },
    {
      icon: <FiUserPlus className={styles.featureIcon} />,
      title: "Impacto Instantâneo",
      description: "Boas-vindas automáticas com efeito imediato"
    },
    {
      icon: <FiSettings className={styles.featureIcon} />,
      title: "Customização Total",
      description: "Configure cada aspecto do bot às suas necessidades"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.hero} ${isRaining ? styles.raining : ''} fade-in`}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroTitleContainer}>
            <FaBolt className={styles.thunderIcon} />
            <h1 className={styles.heroTitle}>THUNDERBOT</h1>
          </div>
          <p className={styles.heroSubtitle}>
            O bot de Discord com a <span className={styles.highlight}>força de um raio</span> para sua comunidade
          </p>
          
          <div className={styles.heroButtons}>
            <a 
              href="https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&scope=bot&permissions=8" 
              className={`${styles.heroButton} ${styles.primaryButton}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiZap /> Adicionar ao Discord
            </a>
            <a 
              href="/dashboard" 
              className={`${styles.heroButton} ${styles.secondaryButton}`}
            >
              Painel de Controle
            </a>
          </div>
        </div>
        
        {/* Efeitos de raio */}
        <div className={styles.lightning}></div>
        <div className={styles.lightning2}></div>
      </section>

      {/* Stats Section */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          {isLoading ? (
            <div className={styles.loadingStats}>
              {[...Array(4)].map((_, i) => (
                <div key={i} className={styles.statCardLoading}></div>
              ))}
            </div>
          ) : (
            <div className={styles.statsGrid}>
              <div className={`${styles.statCard} fade-in`}>
                <FiServer className={styles.statIcon} />
                <h3>Servidores</h3>
                <p className={styles.statNumber}>{stats?.servers.toLocaleString()}+</p>
              </div>
              <div className={`${styles.statCard} fade-in`}>
                <FiUsers className={styles.statIcon} />
                <h3>Usuários</h3>
                <p className={styles.statNumber}>{stats?.users.toLocaleString()}+</p>
              </div>
              <div className={`${styles.statCard} fade-in`}>
                <FiCommand className={styles.statIcon} />
                <h3>Comandos</h3>
                <p className={styles.statNumber}>{stats?.commands}+</p>
              </div>
              <div className={`${styles.statCard} fade-in`}>
                <FiClock className={styles.statIcon} />
                <h3>Uptime</h3>
                <p className={styles.statNumber}>{stats?.uptime}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className={`section ${styles.featuresSection}`}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <FiZap className={styles.sectionIcon} />
            <h2>Recursos Eletrizantes</h2>
            <p>Potência e velocidade como um raio para seu servidor</p>
          </div>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${styles.featureCard} fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.featureIconContainer}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.ctaSection} fade-in`}>
        <div className={`container ${styles.ctaContent}`}>
          <div className={styles.ctaTitleContainer}>
            <FaBolt className={styles.ctaThunderIcon} />
            <h2 className={styles.ctaTitle}>Pronto para um choque de energia?</h2>
          </div>
          <p className={styles.ctaText}>
            Adicione o ThunderBot agora e eletrize sua comunidade
          </p>
          <a 
            href="https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&scope=bot&permissions=8" 
            className={`${styles.ctaButton} ${styles.primaryButton}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiZap /> Adicionar ao Discord
          </a>
        </div>
      </section>
    </>
  )
}

export default Main