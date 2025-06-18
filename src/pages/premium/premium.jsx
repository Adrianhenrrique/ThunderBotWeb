import { FaBolt, FaCrown, FaStar, FaShieldAlt, FaRobot, FaGem } from 'react-icons/fa'
import { FiZap, FiCheck, FiX } from 'react-icons/fi'
import styles from './premium.module.css'
import { useState } from 'react'
import React from 'react'

export default function Premium() {
  const [selectedPlan, setSelectedPlan] = useState('yearly')
  const [isLoading, setIsLoading] = useState(false)

  const features = [
    { icon: <FaBolt />, name: 'Comandos Ilimitados' },
    { icon: <FaCrown />, name: 'Badge Exclusivo' },
    { icon: <FaStar />, name: 'Prioridade no Suporte' },
    { icon: <FaShieldAlt />, name: 'Moderação Avançada' },
    { icon: <FaRobot />, name: 'Comandos Personalizados' },
    { icon: <FaGem />, name: 'Temas Exclusivos' }
  ]

  const plans = {
    monthly: {
      name: 'Mensal',
      price: 'R$ 9,99',
      period: '/mês',
      discount: ''
    },
    yearly: {
      name: 'Anual',
      price: 'R$ 89,99',
      period: '/ano',
      discount: '25% de desconto'
    },
    lifetime: {
      name: 'Vitalício',
      price: 'R$ 199,99',
      period: '',
      discount: 'Economize R$ 500+'
    }
  }

  const handleSubscribe = (plan) => {
    setIsLoading(true)
    // Simular processamento de pagamento
    setTimeout(() => {
      setIsLoading(false)
      alert(`Inscrição no plano ${plan} realizada com sucesso!`)
    }, 1500)
  }

  return (
    <div className={styles.premiumPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <FaCrown className={styles.crownIcon} />
            <span>PREMIUM</span>
          </div>
          <h1 className={styles.heroTitle}>
            Libere o <span className={styles.highlight}>Poder Total</span> do ThunderBot
          </h1>
          <p className={styles.heroSubtitle}>
            Atualize para ThunderBot Premium e obtenha recursos exclusivos que levarão sua comunidade ao próximo nível.
          </p>
        </div>
        <div className={styles.lightningEffect}></div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <FiZap className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Recursos Premium</h2>
          <p className={styles.sectionDescription}>
            Descubra tudo o que você ganha ao se tornar um membro Premium
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureName}>{feature.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <div className={styles.sectionHeader}>
          <FiZap className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Escolha Seu Plano</h2>
          <p className={styles.sectionDescription}>
            Planos acessíveis para todas as necessidades
          </p>
        </div>

        <div className={styles.planSelector}>
          <button
            className={`${styles.planToggle} ${selectedPlan === 'monthly' ? styles.active : ''}`}
            onClick={() => setSelectedPlan('monthly')}
          >
            Mensal
          </button>
          <button
            className={`${styles.planToggle} ${selectedPlan === 'yearly' ? styles.active : ''}`}
            onClick={() => setSelectedPlan('yearly')}
          >
            Anual
          </button>
          <button
            className={`${styles.planToggle} ${selectedPlan === 'lifetime' ? styles.active : ''}`}
            onClick={() => setSelectedPlan('lifetime')}
          >
            Vitalício
          </button>
        </div>

        <div className={styles.plansContainer}>
          <div className={styles.planCard}>
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>{plans[selectedPlan].name}</h3>
              <div className={styles.planPrice}>
                <span className={styles.price}>{plans[selectedPlan].price}</span>
                <span className={styles.period}>{plans[selectedPlan].period}</span>
              </div>
              {plans[selectedPlan].discount && (
                <div className={styles.planDiscount}>
                  {plans[selectedPlan].discount}
                </div>
              )}
            </div>

            <ul className={styles.planFeatures}>
              <li><FiCheck className={styles.featureCheck} /> Todos os recursos Premium</li>
              <li><FiCheck className={styles.featureCheck} /> Suporte prioritário</li>
              <li><FiCheck className={styles.featureCheck} /> Atualizações exclusivas</li>
              <li><FiCheck className={styles.featureCheck} /> Badge no perfil</li>
              {selectedPlan === 'yearly' && (
                <li><FiCheck className={styles.featureCheck} /> 2 meses grátis</li>
              )}
              {selectedPlan === 'lifetime' && (
                <li><FiCheck className={styles.featureCheck} /> Acesso vitalício</li>
              )}
            </ul>

            <button
              className={`${styles.subscribeButton} ${isLoading ? styles.loading : ''}`}
              onClick={() => handleSubscribe(selectedPlan)}
              disabled={isLoading}
            >
              {isLoading ? (
                'Processando...'
              ) : (
                <>
                  <FaCrown className={styles.buttonIcon} />
                  Assinar Agora
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection} id='faq'>
        <div className={styles.sectionHeader}>
          <FiZap className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
          <p className={styles.sectionDescription}>
            Dúvidas comuns sobre o ThunderBot Premium
          </p>
        </div>

        <div className={styles.faqGrid}>
          <div className={styles.faqCard}>
            <h3 className={styles.faqQuestion}>O que acontece se eu cancelar minha assinatura?</h3>
            <p className={styles.faqAnswer}>
              Você manterá acesso aos recursos Premium até o final do período de faturamento atual. Após isso, seu bot voltará ao plano gratuito.
            </p>
          </div>
          
          <div className={styles.faqCard}>
            <h3 className={styles.faqQuestion}>Posso mudar de plano a qualquer momento?</h3>
            <p className={styles.faqAnswer}>
              Sim! Você pode atualizar ou downgrade seu plano quando quiser. As alterações serão aplicadas no próximo ciclo de faturamento.
            </p>
          </div>
          
          <div className={styles.faqCard}>
            <h3 className={styles.faqQuestion}>O ThunderBot Premium funciona em vários servidores?</h3>
            <p className={styles.faqAnswer}>
              Sim, seu plano Premium se aplica a todos os servidores onde você tem permissões de administrador.
            </p>
          </div>
          
          <div className={styles.faqCard}>
            <h3 className={styles.faqQuestion}>Quais métodos de pagamento são aceitos?</h3>
            <p className={styles.faqAnswer}>
              Aceitamos cartões de crédito, PayPal e Pix. Todos os pagamentos são processados de forma segura.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Pronto para levar seu servidor ao próximo nível?</h2>
          <p className={styles.ctaText}>
            Junte-se a milhares de servidores que já estão aproveitando o poder do ThunderBot Premium.
          </p>
          <button
            className={`${styles.ctaButton} ${isLoading ? styles.loading : ''}`}
            onClick={() => handleSubscribe(selectedPlan)}
            disabled={isLoading}
          >
            {isLoading ? (
              'Processando...'
            ) : (
              <>
                <FaBolt className={styles.buttonIcon} />
                Tornar-se Premium Agora
              </>
            )}
          </button>
        </div>
        <div className={styles.lightningEffect}></div>
      </section>
    </div>
  )
}