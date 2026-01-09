import './Hero.css'
import profilePhoto from '../../photos/unnamed.jpg'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'

function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">{t.greeting}</p>
          <h1 className="hero-title">
            {t.heroTitle} <span>{t.heroName}</span>.
          </h1>
          <p className="hero-description">
            {t.heroDescription}
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">{t.contactBtn}</a>
            <a href="#projects" className="btn btn-secondary">{t.projectsBtn}</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <img src={profilePhoto} alt="Foto de Matheus Marques" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
