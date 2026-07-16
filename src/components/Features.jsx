import { useInView } from '../hooks/useInView'
import './Features.css'

const features = [
  {
    emoji: '📊',
    title: 'Health Tracking',
    description:
      'Effortlessly monitor your daily metrics — sleep, activity, nutrition, and more — all in one unified dashboard.',
  },
  {
    emoji: '🧠',
    title: 'Personalised Insights',
    description:
      'Our AI analyses your unique patterns to deliver tailored recommendations that evolve as you do.',
  },
  {
    emoji: '🎯',
    title: 'Progress Goals',
    description:
      'Set meaningful health goals and track your journey with intelligent milestones that celebrate every win.',
  },
  {
    emoji: '🤝',
    title: 'Community',
    description:
      'Connect with others on similar health journeys. Share experiences, find motivation, and grow together.',
  },
]

function Features() {
  const [ref, isVisible] = useInView()

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
          <span className="section-label">Features</span>
          <h2>Everything you need for better health</h2>
          <p>
            Powerful tools designed to simplify your health journey and deliver real results.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }) {
  const [ref, isVisible] = useInView({ rootMargin: '0px 0px -30px 0px' })

  return (
    <div
      className={`features__card fade-in ${isVisible ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span className="features__card-emoji">{feature.emoji}</span>
      <h3 className="features__card-title">{feature.title}</h3>
      <p className="features__card-description">{feature.description}</p>
    </div>
  )
}

export default Features
