import { useState, useEffect } from 'react'
import { 
  FiZap, FiSettings, FiShield, FiCommand, 
  FiPlus, FiTrash2, FiSave, FiEdit2,
  FiMenu, FiX, FiUser, FiServer
} from 'react-icons/fi'
import { FaBolt, FaDiscord } from 'react-icons/fa'
import styles from './dashboard.module.css'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('commands')
  const [commands, setCommands] = useState([])
  const [botSettings, setBotSettings] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [editingCommand, setEditingCommand] = useState(null)
  const [newCommand, setNewCommand] = useState({
    name: '',
    description: '',
    response: '',
    permissions: 'all'
  })

  // Simulação de carregamento de dados
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // Simular chamada API
        await new Promise(resolve => setTimeout(resolve, 800))
        
        // Dados mockados
        setCommands([
          {
            id: 1,
            name: '!ping',
            description: 'Responde com Pong!',
            response: 'Pong! 🏓',
            permissions: 'all'
          },
          {
            id: 2,
            name: '!mod',
            description: 'Ferramentas de moderação',
            response: 'Menu de moderação ativado',
            permissions: 'mods'
          },
          {
            id: 3,
            name: '!info',
            description: 'Mostra informações do servidor',
            response: '**Informações do Servidor**\nMembros: {members}\nCanais: {channels}',
            permissions: 'all'
          }
        ])
        
        setBotSettings({
          prefix: '!',
          welcomeChannel: '#geral',
          modRole: '@Moderador',
          logChannel: '#logs'
        })
      } catch (error) {
        console.error("Error loading dashboard data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSaveCommand = (e) => {
    e.preventDefault()
    if (editingCommand) {
      // Atualizar comando existente
      setCommands(commands.map(cmd => 
        cmd.id === editingCommand.id ? {...newCommand, id: editingCommand.id} : cmd
      ))
    } else {
      // Adicionar novo comando
      setCommands([...commands, {...newCommand, id: Date.now()}])
    }
    setEditingCommand(null)
    setNewCommand({
      name: '',
      description: '',
      response: '',
      permissions: 'all'
    })
  }

  const handleDeleteCommand = (id) => {
    setCommands(commands.filter(cmd => cmd.id !== id))
  }

  const handleEditCommand = (command) => {
    setEditingCommand(command)
    setNewCommand({
      name: command.name,
      description: command.description,
      response: command.response,
      permissions: command.permissions
    })
  }

  const handleSettingsChange = (e) => {
    const { name, value } = e.target
    setBotSettings({
      ...botSettings,
      [name]: value
    })
  }

  const saveSettings = () => {
    // Simular salvamento
    console.log("Configurações salvas:", botSettings)
    alert('Configurações salvas com sucesso!')
  }

  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <FaBolt className={styles.logoIcon} />
          <h2 className={styles.logoText}>THUNDERBOT</h2>
          <button 
            className={styles.closeMenuButton}
            onClick={() => setIsMenuOpen(false)}
          >
            <FiX />
          </button>
        </div>
        
        <nav className={styles.nav}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>
              <FiUser />
            </div>
            <div className={styles.userDetails}>
              <span className={styles.username}>Admin</span>
              <span className={styles.server}>Servidor Ativo</span>
            </div>
          </div>
          
          <ul className={styles.navList}>
            <li>
              <button 
                className={`${styles.navButton} ${activeTab === 'commands' ? styles.active : ''}`}
                onClick={() => setActiveTab('commands')}
              >
                <FiCommand className={styles.navIcon} />
                Comandos
              </button>
            </li>
            <li>
              <button 
                className={`${styles.navButton} ${activeTab === 'settings' ? styles.active : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <FiSettings className={styles.navIcon} />
                Configurações
              </button>
            </li>
            <li>
              <button 
                className={`${styles.navButton} ${activeTab === 'moderation' ? styles.active : ''}`}
                onClick={() => setActiveTab('moderation')}
              >
                <FiShield className={styles.navIcon} />
                Moderação
              </button>
            </li>
          </ul>
        </nav>
        
        <div className={styles.sidebarFooter}>
          <a 
            href="https://discord.gg/seu-convite" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.supportLink}
          >
            <FaDiscord className={styles.supportIcon} />
            Suporte
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Mobile Header */}
        <header className={styles.mobileHeader}>
          <button 
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(true)}
          >
            <FiMenu />
          </button>
          <h1 className={styles.mobileTitle}>
            {activeTab === 'commands' && 'Comandos'}
            {activeTab === 'settings' && 'Configurações'}
            {activeTab === 'moderation' && 'Moderação'}
          </h1>
        </header>

        {/* Loading State */}
        {isLoading && (
          <div className={styles.loadingContainer}>
            <FiZap className={styles.loadingIcon} />
            <p>Carregando dashboard...</p>
          </div>
        )}

        {/* Commands Tab */}
        {!isLoading && activeTab === 'commands' && (
          <div className={styles.tabContent}>
            <div className={styles.tabHeader}>
              <h2 className={styles.tabTitle}>
                <FiCommand className={styles.tabTitleIcon} />
                Gerenciar Comandos
              </h2>
              <button 
                className={styles.addButton}
                onClick={() => setEditingCommand(null)}
              >
                <FiPlus />
                Novo Comando
              </button>
            </div>
            
            {/* Command Form */}
            {(editingCommand || newCommand.name === '') && (
              <form className={styles.commandForm} onSubmit={handleSaveCommand}>
                <div className={styles.formGroup}>
                  <label htmlFor="commandName" className={styles.formLabel}>
                    Nome do Comando
                  </label>
                  <input
                    type="text"
                    id="commandName"
                    className={styles.formInput}
                    placeholder="!meucomando"
                    value={newCommand.name}
                    onChange={(e) => setNewCommand({...newCommand, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="commandDesc" className={styles.formLabel}>
                    Descrição
                  </label>
                  <input
                    type="text"
                    id="commandDesc"
                    className={styles.formInput}
                    placeholder="O que este comando faz?"
                    value={newCommand.description}
                    onChange={(e) => setNewCommand({...newCommand, description: e.target.value})}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="commandResponse" className={styles.formLabel}>
                    Resposta
                  </label>
                  <textarea
                    id="commandResponse"
                    className={`${styles.formInput} ${styles.formTextarea}`}
                    placeholder="O que o bot deve responder?"
                    rows="4"
                    value={newCommand.response}
                    onChange={(e) => setNewCommand({...newCommand, response: e.target.value})}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="commandPerms" className={styles.formLabel}>
                    Permissões
                  </label>
                  <select
                    id="commandPerms"
                    className={styles.formInput}
                    value={newCommand.permissions}
                    onChange={(e) => setNewCommand({...newCommand, permissions: e.target.value})}
                  >
                    <option value="all">Todos os usuários</option>
                    <option value="mods">Apenas moderadores</option>
                    <option value="admin">Apenas administradores</option>
                  </select>
                </div>
                
                <div className={styles.formButtons}>
                  <button 
                    type="submit" 
                    className={`${styles.saveButton} ${styles.thunderButton}`}
                  >
                    <FiSave />
                    {editingCommand ? 'Atualizar Comando' : 'Salvar Comando'}
                  </button>
                  
                  {editingCommand && (
                    <button
                      type="button"
                      className={styles.cancelButton}
                      onClick={() => {
                        setEditingCommand(null)
                        setNewCommand({
                          name: '',
                          description: '',
                          response: '',
                          permissions: 'all'
                        })
                      }}
                    >
                      Cancelar
                    </button>
                  )}
                </div>
              </form>
            )}
            
            {/* Commands List */}
            <div className={styles.commandsList}>
              <h3 className={styles.listTitle}>Comandos Configurados</h3>
              
              {commands.length === 0 ? (
                <div className={styles.emptyState}>
                  <FiCommand className={styles.emptyIcon} />
                  <p>Nenhum comando configurado ainda</p>
                </div>
              ) : (
                <ul className={styles.commandsGrid}>
                  {commands.map(command => (
                    <li key={command.id} className={styles.commandCard}>
                      <div className={styles.commandHeader}>
                        <span className={styles.commandName}>{command.name}</span>
                        <span className={`${styles.commandBadge} ${
                          command.permissions === 'mods' ? styles.modBadge :
                          command.permissions === 'admin' ? styles.adminBadge :
                          styles.allBadge
                        }`}>
                          {command.permissions === 'mods' ? 'Mod' :
                           command.permissions === 'admin' ? 'Admin' : 'Todos'}
                        </span>
                      </div>
                      
                      <p className={styles.commandDescription}>{command.description}</p>
                      
                      <div className={styles.commandResponse}>
                        <span className={styles.responseLabel}>Resposta:</span>
                        <p>{command.response}</p>
                      </div>
                      
                      <div className={styles.commandActions}>
                        <button
                          className={styles.editButton}
                          onClick={() => handleEditCommand(command)}
                        >
                          <FiEdit2 />
                          Editar
                        </button>
                        <button
                          className={styles.deleteButton}
                          onClick={() => handleDeleteCommand(command.id)}
                        >
                          <FiTrash2 />
                          Remover
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
        
        {/* Settings Tab */}
        {!isLoading && activeTab === 'settings' && (
          <div className={styles.tabContent}>
            <div className={styles.tabHeader}>
              <h2 className={styles.tabTitle}>
                <FiSettings className={styles.tabTitleIcon} />
                Configurações do Bot
              </h2>
            </div>
            
            <form className={styles.settingsForm}>
              <div className={styles.settingsGrid}>
                <div className={styles.settingGroup}>
                  <label htmlFor="prefix" className={styles.settingLabel}>
                    Prefixo dos Comandos
                  </label>
                  <input
                    type="text"
                    id="prefix"
                    name="prefix"
                    className={styles.settingInput}
                    value={botSettings.prefix}
                    onChange={handleSettingsChange}
                    maxLength="3"
                  />
                </div>
                
                <div className={styles.settingGroup}>
                  <label htmlFor="welcomeChannel" className={styles.settingLabel}>
                    Canal de Boas-vindas
                  </label>
                  <input
                    type="text"
                    id="welcomeChannel"
                    name="welcomeChannel"
                    className={styles.settingInput}
                    value={botSettings.welcomeChannel}
                    onChange={handleSettingsChange}
                  />
                </div>
                
                <div className={styles.settingGroup}>
                  <label htmlFor="modRole" className={styles.settingLabel}>
                    Cargo de Moderador
                  </label>
                  <input
                    type="text"
                    id="modRole"
                    name="modRole"
                    className={styles.settingInput}
                    value={botSettings.modRole}
                    onChange={handleSettingsChange}
                  />
                </div>
                
                <div className={styles.settingGroup}>
                  <label htmlFor="logChannel" className={styles.settingLabel}>
                    Canal de Logs
                  </label>
                  <input
                    type="text"
                    id="logChannel"
                    name="logChannel"
                    className={styles.settingInput}
                    value={botSettings.logChannel}
                    onChange={handleSettingsChange}
                  />
                </div>
              </div>
              
              <div className={styles.settingsButtons}>
                <button 
                  type="button"
                  className={`${styles.saveButton} ${styles.thunderButton}`}
                  onClick={saveSettings}
                >
                  <FiSave />
                  Salvar Configurações
                </button>
              </div>
            </form>
          </div>
        )}
        
        {/* Moderation Tab */}
        {!isLoading && activeTab === 'moderation' && (
          <div className={styles.tabContent}>
            <div className={styles.tabHeader}>
              <h2 className={styles.tabTitle}>
                <FiShield className={styles.tabTitleIcon} />
                Configurações de Moderação
              </h2>
            </div>
            
            <div className={styles.moderationContent}>
              <div className={styles.moderationCard}>
                <h3 className={styles.moderationTitle}>
                  <FiShield className={styles.moderationIcon} />
                  Configurações Automáticas
                </h3>
                
                <div className={styles.toggleGroup}>
                  <label className={styles.toggleLabel}>
                    <input type="checkbox" className={styles.toggleInput} />
                    <span className={styles.toggleSlider}></span>
                    Anti-Spam
                  </label>
                  
                  <label className={styles.toggleLabel}>
                    <input type="checkbox" className={styles.toggleInput} />
                    <span className={styles.toggleSlider}></span>
                    Anti-Links
                  </label>
                  
                  <label className={styles.toggleLabel}>
                    <input type="checkbox" className={styles.toggleInput} />
                    <span className={styles.toggleSlider}></span>
                    Anti-Palavrões
                  </label>
                </div>
              </div>
              
              <div className={styles.moderationCard}>
                <h3 className={styles.moderationTitle}>
                  <FiUser className={styles.moderationIcon} />
                  Ações de Moderação
                </h3>
                
                <div className={styles.moderationActions}>
                  <button className={styles.modActionButton}>
                    <FiUser />
                    Banimento
                  </button>
                  <button className={styles.modActionButton}>
                    <FiUser />
                    Expulsão
                  </button>
                  <button className={styles.modActionButton}>
                    <FiUser />
                    Silenciar
                  </button>
                  <button className={styles.modActionButton}>
                    <FiUser />
                    Aviso
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}