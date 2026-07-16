import { useInView } from '../hooks/useInView'
import './Mission.css'

function Mission() {
  const [ref, isVisible] = useInView()

  return (
    <section className="mission section" id="mission">
      <div className="container">
        <div className={`mission__grid fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div className="mission__content">
            <span className="section-label">Our Mission</span>
            <h2>Empowering you to take control of your health</h2>
            <p>
              We believe that everyone deserves access to meaningful health insights. Agon Health
              transforms complex health data into clear, actionable guidance — making it simple to
              understand your body and make informed decisions about your wellbeing.
            </p>
            <p>
              By combining cutting-edge data science with intuitive design, we're building a platform
              that meets you where you are — whether you're just starting your health journey or
              looking to optimise peak performance.
            </p>

            <div className="mission__stats">
              <div className="mission__stat">
                <span className="mission__stat-value">24/7</span>
                <span className="mission__stat-label">Health Tracking</span>
              </div>
              <div className="mission__stat">
                <span className="mission__stat-value">100+</span>
                <span className="mission__stat-label">Metrics Analysed</span>
              </div>
              <div className="mission__stat">
                <span className="mission__stat-value">AI</span>
                <span className="mission__stat-label">Powered Insights</span>
              </div>
            </div>
          </div>

          <div className="mission__visual">
            <div className="mission__illustration">
              <span className="mission__illustration-icon">🫀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
