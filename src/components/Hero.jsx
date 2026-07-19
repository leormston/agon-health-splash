import { useInView } from '../hooks/useInView'
import './Hero.css'

function Hero() {
  const [ref, isVisible] = useInView({ threshold: 0.2 })

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-orb hero__bg-orb--1" />
      <div className="hero__bg-orb hero__bg-orb--2" />
      <div className="hero__bg-orb hero__bg-orb--3" />

      <div className={`container hero__content fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="hero__logo">
          <img src="/logo_icon.png" alt="Agon Health logo" className="hero__logo-img" />
        </div>

        <h1 className="hero__title">
          Agon <span className="hero__title-accent">Health</span>
        </h1>

        <p className="hero__tagline">Your health journey starts here</p>

        <p className="hero__subtitle">
          A smarter way to understand your body, track your progress, and achieve lasting wellbeing.
        </p>

        <div className="hero__cta">
          <a href="#contact" className="hero__button hero__button--primary">
            Get Early Access
          </a>
          <a href="#mission" className="hero__button hero__button--secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
