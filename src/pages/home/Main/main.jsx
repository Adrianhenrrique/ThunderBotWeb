import { useState, useEffect } from 'react'
import styles from './Main.module.css'
import { 
  FiDisc, FiSettings, FiShield, FiMusic, 
  FiMessageSquare, FiUserPlus, FiTrendingUp 
} from 'react-icons/fi'

const Main = () => {
  const [stats, setStats] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBotStats = async () => {
      setIsLoading(true)
      try {
        // Simulação de API
        await new Promise(resolve => setTimeout(resolve, 1000))
        
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
  }, [])

  const features = [
    {
      icon: <FiDisc className={styles.featureIcon} />,
      title: "Fácil Configuração",
      description: "Configure o bot em minutos com nosso painel intuitivo"
    },
    {
      icon: <FiShield className={styles.featureIcon} />,
      title: "Moderação Avançada",
      description: "Ferramentas poderosas para manter seu servidor seguro"
    },
    {
      icon: <FiMusic className={styles.featureIcon} />,
      title: "Sistema de Música",
      description: "Reproduza música de alta qualidade em seus canais de voz"
    },
    {
      icon: <FiMessageSquare className={styles.featureIcon} />,
      title: "Comandos Personalizados",
      description: "Crie comandos únicos para seu servidor"
    },
    {
      icon: <FiUserPlus className={styles.featureIcon} />,
      title: "Bem-vindo Automático",
      description: "Dê as boas-vindas aos novos membros com mensagens personalizadas"
    },
    {
      icon: <FiSettings className={styles.featureIcon} />,
      title: "Totalmente Customizável",
      description: "Ajuste cada aspecto do bot às suas necessidades"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.hero} fade-in`}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>ThunderBot</h1>
          <p className={styles.heroSubtitle}>
            O bot de Discord mais poderoso para sua comunidade
          </p>
          
          <div className={styles.heroButtons}>
            <a 
              href="https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&scope=bot&permissions=8" 
              className={`btn btn-primary ${styles.heroButton}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Adicionar ao Discord
            </a>
            <a 
              href="/dashboard" 
              className={`btn btn-secondary ${styles.heroButton}`}
            >
              Painel de Controle
            </a>
          </div>
        </div>
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
                <FiTrendingUp className={styles.statIcon} />
                <h3>Servidores</h3>
                <p className={styles.statNumber}>{stats?.servers.toLocaleString()}+</p>
              </div>
              <div className={`${styles.statCard} fade-in`}>
                <FiTrendingUp className={styles.statIcon} />
                <h3>Usuários</h3>
                <p className={styles.statNumber}>{stats?.users.toLocaleString()}+</p>
              </div>
              <div className={`${styles.statCard} fade-in`}>
                <FiTrendingUp className={styles.statIcon} />
                <h3>Comandos</h3>
                <p className={styles.statNumber}>{stats?.commands}+</p>
              </div>
              <div className={`${styles.statCard} fade-in`}>
                <FiTrendingUp className={styles.statIcon} />
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
          <div className="section-title">
            <h2>Recursos Incríveis</h2>
            <p>Tudo que você precisa para gerenciar sua comunidade</p>
          </div>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${styles.featureCard} fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {feature.icon}
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
          <h2 className={styles.ctaTitle}>Pronto para turbinar seu servidor?</h2>
          <p className={styles.ctaText}>
            Adicione o ThunderBot agora e leve sua comunidade para o próximo nível
          </p>
          <a 
            href="https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&scope=bot&permissions=8" 
            className={`btn btn-primary ${styles.ctaButton}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Adicionar ao Discord
          </a>
        </div>
      </section>
    </>
  )
}

export default Main