import { FaBolt, FaSearch, FaDiscord, FaGithub } from 'react-icons/fa'
import { FiZap, FiCode, FiSettings, FiShield, FiMusic, FiMessageSquare } from 'react-icons/fi'
import Style from './docs.module.css'

// Estrutura de dados para os comandos
const commandCategories = [
  {
    id: "getting-started",
    title: "Começando",
    icon: <FiZap className={Style.titleIcon} />,
    commands: [
      {
        name: "Adicionando o ThunderBot ao seu servidor",
        content: (
          <>
            <p>Para adicionar o ThunderBot ao seu servidor Discord:</p>
            <ol className={Style.commandSteps}>
              <li>Clique no botão "Convidar" abaixo</li>
              <li>Selecione o servidor onde deseja adicionar o bot</li>
              <li>Conceda as permissões necessárias</li>
              <li>Complete a verificação de segurança</li>
            </ol>
            <button className={`${Style.inviteButton} ${Style.thunderButton}`}>
              <FiZap className={Style.buttonIcon} />
              Convidar ThunderBot
            </button>
          </>
        )
      },
      {
        name: "Configuração Básica",
        content: (
          <>
            <p>Após adicionar o bot, configure os canais e permissões básicas:</p>
            <div className={Style.commandCode}>
              <code>!setup</code>
            </div>
            <p className={Style.commandDescription}>
              Este comando irá guiá-lo através da configuração inicial do bot em seu servidor.
            </p>
          </>
        )
      }
    ]
  },
  {
    id: "moderation",
    title: "Moderação",
    icon: <FiShield className={Style.titleIcon} />,
    description: "Comandos poderosos para manter seu servidor seguro e organizado.",
    commands: [
      {
        name: "!kick",
        usage: "!kick @usuário [motivo]",
        description: "Remove um membro do servidor (pode retornar com um convite).",
        permissions: "Kick Members"
      },
      {
        name: "!ban",
        usage: "!ban @usuário [motivo]",
        description: "Bane permanentemente um membro do servidor.",
        permissions: "Ban Members"
      },
      {
        name: "!clear",
        usage: "!clear [quantidade]",
        description: "Apaga uma quantidade específica de mensagens (padrão: 10).",
        permissions: "Manage Messages"
      },
      {
        name: "!warn",
        usage: "!warn @usuário [motivo]",
        description: "Adverte um membro e registra a infração.",
        permissions: "Kick Members"
      }
    ]
  },
  {
    id: "utility",
    title: "Utilidades",
    icon: <FiSettings className={Style.titleIcon} />,
    description: "Comandos úteis para gerenciar e melhorar seu servidor.",
    commands: [
      {
        name: "!serverinfo",
        usage: "!serverinfo",
        description: "Mostra informações detalhadas sobre o servidor."
      },
      {
        name: "!userinfo",
        usage: "!userinfo [@usuário]",
        description: "Mostra informações sobre um membro do servidor."
      },
      {
        name: "!poll",
        usage: "!poll \"pergunta\" \"opção1\" \"opção2\" ...",
        description: "Cria uma enquete com até 10 opções."
      },
      {
        name: "!timer",
        usage: "!timer [tempo] [unidade]",
        description: "Define um temporizador (ex: !timer 10 min)."
      }
    ]
  },
  {
    id: "fun",
    title: "Diversão",
    icon: <FiMessageSquare className={Style.titleIcon} />,
    description: "Comandos divertidos para entreter seus membros.",
    commands: [
      {
        name: "!meme",
        usage: "!meme [tema]",
        description: "Mostra um meme aleatório ou sobre o tema especificado."
      },
      {
        name: "!joke",
        usage: "!joke",
        description: "Conta uma piada aleatória."
      },
      {
        name: "!gif",
        usage: "!gif [pesquisa]",
        description: "Mostra um GIF baseado na pesquisa."
      }
    ]
  },
  {
    id: "music",
    title: "Música",
    icon: <FiMusic className={Style.titleIcon} />,
    description: "Comandos para tocar música no seu servidor.",
    commands: [
      {
        name: "!play",
        usage: "!play [nome/URL]",
        description: "Toca a música especificada."
      },
      {
        name: "!skip",
        usage: "!skip",
        description: "Pula a música atual."
      },
      {
        name: "!queue",
        usage: "!queue",
        description: "Mostra a fila de músicas."
      }
    ]
  }
]

// Links do sidebar
const sidebarLinks = [
  { id: "getting-started", icon: <FiZap className={Style.linkIcon} />, text: "Começando" },
  { id: "moderation", icon: <FiShield className={Style.linkIcon} />, text: "Moderação" },
  { id: "utility", icon: <FiSettings className={Style.linkIcon} />, text: "Utilidades" },
  { id: "fun", icon: <FiMessageSquare className={Style.linkIcon} />, text: "Diversão" },
  { id: "music", icon: <FiMusic className={Style.linkIcon} />, text: "Música" },
  { id: "advanced", icon: <FiCode className={Style.linkIcon} />, text: "Avançado" }
]

// Links de suporte
const supportLinks = [
  { icon: <FaDiscord className={Style.supportIcon} />, text: "Servidor de Suporte", url: "https://discord.gg/seu-convite" },
  { icon: <FaGithub className={Style.supportIcon} />, text: "GitHub", url: "https://github.com/seu-usuario/thunderbot" }
]

export default function Documentation() {
  return (
    <main className={Style.docsContainer}>
      {/* Hero Section */}
      <section className={`${Style.heroSection} ${Style.thunderEffect}`}>
        <div className={Style.heroContent}>
          <div className={Style.titleWrapper}>
            <FiZap className={Style.thunderIcon} />
            <h1 className={Style.heroTitle}>DOCUMENTAÇÃO <span className={Style.thunderText}>THUNDERBOT</span></h1>
          </div>
          <p className={Style.heroSubtitle}>
            Tudo o que você precisa saber para dominar o poder do ThunderBot
          </p>
          <div className={Style.searchContainer}>
            <input 
              type="text" 
              placeholder="Pesquisar comandos..." 
              className={Style.searchInput}
            />
            <FaSearch className={Style.searchIcon} />
          </div>
        </div>
        <div className={Style.lightningEffect}></div>
      </section>

      {/* Main Content */}
      <div className={Style.docsLayout}>
        {/* Sidebar */}
        <aside className={Style.sidebar}>
          <div className={`${Style.sidebarCard} ${Style.thunderCard}`}>
            <h3 className={Style.sidebarTitle}>
              <FaBolt className={Style.sidebarIcon} />
              CATEGORIAS
            </h3>
            <nav className={Style.sidebarNav}>
              <ul className={Style.sidebarList}>
                {sidebarLinks.map(link => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className={Style.sidebarLink}>
                      {link.icon}
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={`${Style.supportCard} ${Style.thunderCard}`}>
            <h3 className={Style.sidebarTitle}>
              <FaBolt className={Style.sidebarIcon} />
              SUPORTE
            </h3>
            <div className={Style.supportLinks}>
              {supportLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={Style.supportLink}
                >
                  {link.icon}
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className={Style.contentArea}>
          {/* Mapeando as categorias de comandos */}
          {commandCategories.map(category => (
            <section key={category.id} id={category.id} className={Style.docsSection}>
              <h2 className={Style.sectionTitle}>
                {category.icon}
                {category.title}
              </h2>
              <div className={Style.sectionContent}>
                {category.description && <p className={Style.sectionText}>{category.description}</p>}
                
                {/* Verifica o tipo de comando (card ou grid) */}
                {category.id === "getting-started" ? (
                  // Comandos em formato de card (para Começando)
                  category.commands.map((command, index) => (
                    <div key={index} className={Style.commandCard}>
                      <h3 className={Style.commandTitle}>{command.name}</h3>
                      <div className={Style.commandContent}>
                        {command.content}
                      </div>
                    </div>
                  ))
                ) : (
                  // Comandos em formato de grid (para outras categorias)
                  <div className={Style.commandGrid}>
                    {category.commands.map((command, index) => (
                      <div key={index} className={`${Style.commandItem} ${Style.thunderCard}`}>
                        <h3 className={Style.commandName}>{command.name}</h3>
                        <div className={Style.commandUsage}>
                          <code>{command.usage}</code>
                        </div>
                        <p className={Style.commandDesc}>{command.description}</p>
                        {command.permissions && (
                          <div className={Style.commandPerms}>
                            <span>Permissões necessárias: {command.permissions}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}

          {/* Support Section */}
          <section className={Style.supportSection}>
            <div className={`${Style.supportBanner} ${Style.thunderCard}`}>
              <h3 className={Style.supportBannerTitle}>
                Precisa de mais ajuda?
              </h3>
              <p className={Style.supportBannerText}>
                Junte-se ao nosso servidor de suporte ou consulte o GitHub para reportar problemas.
              </p>
              <div className={Style.supportBannerButtons}>
                {supportLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${Style.supportButton} ${index === 0 ? Style.discordButton : Style.githubButton}`}
                  >
                    {link.icon}
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}