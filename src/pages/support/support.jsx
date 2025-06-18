import { FaDiscord, FaBolt, FaEnvelope, FaQuestionCircle } from 'react-icons/fa'
import { FiZap, FiMessageSquare, FiUser, FiServer } from 'react-icons/fi'
import styles from './support.module.css'
import { useState } from 'react'

export default function Support() {
  const [activeTab, setActiveTab] = useState('faq')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const faqItems = [
    {
      question: 'Como adiciono o ThunderBot ao meu servidor?',
      answer: 'Clique no botão "Adicionar ao Discord" na página inicial e selecione o servidor onde deseja adicionar o bot. Certifique-se de ter permissões de administrador.'
    },
    {
      question: 'O ThunderBot é gratuito?',
      answer: 'Sim! O ThunderBot tem uma versão gratuita com muitos recursos. Também oferecemos um plano Premium com funcionalidades adicionais.'
    },
    {
      question: 'Como redefino o prefixo dos comandos?',
      answer: 'Use o comando !config prefix [novo prefixo] ou altere no painel de configurações do dashboard.'
    },
    {
      question: 'O ThunderBot registra minhas mensagens?',
      answer: 'Não, o ThunderBot não armazena o conteúdo das mensagens dos usuários. Apenas registramos dados necessários para o funcionamento dos comandos e moderação.'
    },
    {
      question: 'Como reporto um bug?',
      answer: 'Você pode reportar bugs através do nosso servidor de suporte no Discord ou pelo formulário de contato nesta página.'
    },
    {
      question: 'Quais são os requisitos para executar o ThunderBot?',
      answer: 'O ThunderBot roda em qualquer servidor Discord sem requisitos especiais. Para alguns comandos de música, recomendamos um canal de voz dedicado.'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    setTimeout(() => {
      alert('Sua mensagem foi enviada com sucesso! Nossa equipe entrará em contato em breve.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className={styles.supportPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <FaBolt className={styles.titleIcon} />
            Central de Suporte
          </h1>
          <p className={styles.heroSubtitle}>
            Estamos aqui para ajudar você a aproveitar ao máximo o ThunderBot
          </p>
        </div>
        <div className={styles.lightningEffect}></div>
      </section>

      {/* Support Tabs */}
      <section className={styles.tabsSection}>
        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${activeTab === 'faq' ? styles.active : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            <FaQuestionCircle className={styles.tabIcon} />
            FAQ
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'contact' ? styles.active : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            <FiMessageSquare className={styles.tabIcon} />
            Contato
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'resources' ? styles.active : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            <FiServer className={styles.tabIcon} />
            Recursos
          </button>
        </div>
      </section>

      {/* FAQ Tab */}
      {activeTab === 'faq' && (
        <section className={styles.faqSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              <FiZap className={styles.sectionIcon} />
              Perguntas Frequentes
            </h2>
            <p className={styles.sectionDescription}>
              Encontre respostas para as dúvidas mais comuns sobre o ThunderBot
            </p>

            <div className={styles.faqGrid}>
              {faqItems.map((item, index) => (
                <div key={index} className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>
                    <FiZap className={styles.faqIcon} />
                    {item.question}
                  </h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Tab */}
      {activeTab === 'contact' && (
        <section className={styles.contactSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              <FiMessageSquare className={styles.sectionIcon} />
              Fale Conosco
            </h2>
            <p className={styles.sectionDescription}>
              Envie sua dúvida ou problema e nossa equipe responderá o mais rápido possível
            </p>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Seu Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.formInput}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Seu Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.formInput}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.formInput}
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`${styles.submitButton} ${isSubmitting ? styles.loading : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : (
                  <>
                    <FiMessageSquare className={styles.buttonIcon} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Resources Tab */}
      {activeTab === 'resources' && (
        <section className={styles.resourcesSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              <FiServer className={styles.sectionIcon} />
              Recursos Úteis
            </h2>
            <p className={styles.sectionDescription}>
              Materiais para ajudar você a dominar o ThunderBot
            </p>

            <div className={styles.resourcesGrid}>
              <a 
                href="/documentation" 
                className={styles.resourceCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.resourceIcon}>
                  <FiZap />
                </div>
                <h3 className={styles.resourceTitle}>Documentação Completa</h3>
                <p className={styles.resourceDescription}>
                  Guia detalhado de todos os comandos e funcionalidades do ThunderBot
                </p>
              </a>

              <a 
                href="https://discord.gg/seu-convite" 
                className={styles.resourceCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.resourceIcon}>
                  <FaDiscord />
                </div>
                <h3 className={styles.resourceTitle}>Servidor de Suporte</h3>
                <p className={styles.resourceDescription}>
                  Junte-se à nossa comunidade no Discord para ajuda em tempo real
                </p>
              </a>

              <a 
                href="/tutorials" 
                className={styles.resourceCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.resourceIcon}>
                  <FiUser />
                </div>
                <h3 className={styles.resourceTitle}>Tutoriais em Vídeo</h3>
                <p className={styles.resourceDescription}>
                  Aprenda a configurar e usar o ThunderBot com nossos vídeos explicativos
                </p>
              </a>

              <a 
                href="/status" 
                className={styles.resourceCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.resourceIcon}>
                  <FiServer />
                </div>
                <h3 className={styles.resourceTitle}>Status do Serviço</h3>
                <p className={styles.resourceDescription}>
                  Verifique o status atual do ThunderBot e incidentes reportados
                </p>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Support Channels */}
      <section className={styles.channelsSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            <FiZap className={styles.sectionIcon} />
            Canais de Suporte
          </h2>
          <p className={styles.sectionDescription}>
            Entre em contato conosco através dos nossos canais oficiais
          </p>

          <div className={styles.channelsGrid}>
            <div className={styles.channelCard}>
              <div className={styles.channelIcon}>
                <FaDiscord />
              </div>
              <h3 className={styles.channelTitle}>Discord</h3>
              <p className={styles.channelDescription}>
                Suporte rápido e comunidade ativa
              </p>
              <a 
                href="https://discord.gg/seu-convite" 
                className={styles.channelButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar no Servidor
              </a>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelIcon}>
                <FaEnvelope />
              </div>
              <h3 className={styles.channelTitle}>Email</h3>
              <p className={styles.channelDescription}>
                Suporte detalhado por email
              </p>
              <a 
                href="mailto:suporte@thunderbot.com" 
                className={styles.channelButton}
              >
                Enviar Email
              </a>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelIcon}>
                <FaQuestionCircle />
              </div>
              <h3 className={styles.channelTitle}>Base de Conhecimento</h3>
              <p className={styles.channelDescription}>
                Artigos e tutoriais detalhados
              </p>
              <a 
                href="/knowledge-base" 
                className={styles.channelButton}
              >
                Acessar Base
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}