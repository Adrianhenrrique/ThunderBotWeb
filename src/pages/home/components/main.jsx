import { useState, useEffect } from 'react'
import Style from '../styles/main.module.css'
import { FiDisc, FiSettings, FiShield, FiMusic, FiMessageSquare, FiUserPlus } from 'react-icons/fi'

function Main() {
  const [stats, setStats] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulação de fetch dos dados do bot
    const fetchBotStats = async () => {
      setIsLoading(true)
      try {
        // Em uma aplicação real, você faria uma chamada API aqui
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const mockStats = {
          servers: 128,
          users: 5243,
          commands: 24,
          uptime: '99.8%'
        }
        
        setStats(mockStats)
      } catch (error) {
        console.error("Erro ao carregar estatísticas:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBotStats()
  }, [])

  const features = [
    {
      icon: <FiDisc size={24} />,
      title: "Fácil Configuração",
      description: "Configure o bot em minutos com nosso painel intuitivo"
    },
    {
      icon: <FiShield size={24} />,
      title: "Moderação Avançada",
      description: "Ferramentas poderosas para manter seu servidor seguro"
    },
    {
      icon: <FiMusic size={24} />,
      title: "Sistema de Música",
      description: "Reproduza música de alta qualidade em seus canais de voz"
    },
    {
      icon: <FiMessageSquare size={24} />,
      title: "Comandos Personalizados",
      description: "Crie comandos únicos para seu servidor"
    },
    {
      icon: <FiUserPlus size={24} />,
      title: "Bem-vindo Automático",
      description: "Dê as boas-vindas aos novos membros com mensagens personalizadas"
    },
    {
      icon: <FiSettings size={24} />,
      title: "Totalmente Customizável",
      description: "Ajuste cada aspecto do bot às suas necessidades"
    }
  ]

  return (
    <main className={Style.main}>
      {/* Hero Section */}
      <section className={Style.hero}>
        <div className={Style.heroContent}>
          <h1 className={Style.heroTitle}>ThunderBot</h1>
          <p className={Style.heroSubtitle}>O bot de Discord mais poderoso para sua comunidade</p>
          
          <div className={Style.heroButtons}>
            <a 
              href="https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&scope=bot&permissions=8" 
              className={Style.primaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Adicionar ao Discord
            </a>
            <a 
              href="/dashboard" 
              className={Style.secondaryButton}
            >
              Painel de Controle
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={Style.statsSection}>
        {isLoading ? (
          <div className={Style.loadingStats}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={Style.statCardLoading}></div>
            ))}
          </div>
        ) : (
          <div className={Style.statsGrid}>
            <div className={Style.statCard}>
              <h3>Servidores</h3>
              <p className={Style.statNumber}>{stats?.servers.toLocaleString()}+</p>
            </div>
            <div className={Style.statCard}>
              <h3>Usuários</h3>
              <p className={Style.statNumber}>{stats?.users.toLocaleString()}+</p>
            </div>
            <div className={Style.statCard}>
              <h3>Comandos</h3>
              <p className={Style.statNumber}>{stats?.commands}+</p>
            </div>
            <div className={Style.statCard}>
              <h3>Uptime</h3>
              <p className={Style.statNumber}>{stats?.uptime}</p>
            </div>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className={Style.featuresSection}>
        <h2 className={Style.sectionTitle}>Recursos Incríveis</h2>
        <p className={Style.sectionSubtitle}>Tudo que você precisa para gerenciar sua comunidade</p>
        
        <div className={Style.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={Style.featureCard}>
              <div className={Style.featureIcon}>{feature.icon}</div>
              <h3 className={Style.featureTitle}>{feature.title}</h3>
              <p className={Style.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={Style.ctaSection}>
        <div className={Style.ctaContent}>
          <h2 className={Style.ctaTitle}>Pronto para turbinar seu servidor?</h2>
          <p className={Style.ctaText}>Adicione o ThunderBot agora e leve sua comunidade para o próximo nível</p>
          <a 
            href="https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&scope=bot&permissions=8" 
            className={Style.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Adicionar ao Discord
          </a>
        </div>
      </section>
    </main>
  )
}

export default Main