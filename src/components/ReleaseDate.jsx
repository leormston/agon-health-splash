import { useInView } from '../hooks/useInView'
import './ReleaseDate.css'

function ReleaseDate() {
  const [ref, isVisible] = useInView()

  return (
    <section className="release section" id="release">
      <div className="container">
        <div className={`release__content fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
          <span className="section-label">Coming Soon</span>
          <h2>Something amazing is on its way</h2>
          <p className="release__description">
            We're putting the finishing touches on an experience that will redefine how you
            approach personal health. Be among the first to experience it.
          </p>

          <div className="release__date-container">
            <div className="release__badge">
              <div className="release__pulse" />
              <span className="release__date-label">iOS Public Release</span>
              <span className="release__date-value">Q4 2026</span>
            </div>
          </div>

          <div className="release__timeline">
            <div className="release__timeline-item release__timeline-item--done">
              <span className="release__timeline-dot" />
              <span>Finalise Alpha - Q2 2026</span>
            </div>
            <div className="release__timeline-item release__timeline-item--active">
              <span className="release__timeline-dot" />
              <span>Beta Testing on iOS - Q3 2026</span>
            </div>
            <div className="release__timeline-item">
              <span className="release__timeline-dot" />
              <span>iOS Public Release - Q4 2026</span>
            </div>
            <div className="release__timeline-item">
              <span className="release__timeline-dot" />
              <span>Android Release - Q1 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReleaseDate
