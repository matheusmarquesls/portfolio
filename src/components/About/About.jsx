import './About.css'
import profilePhoto from '../../photos/unnamed.jpg'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'

function About() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">
            {t.aboutTitle} <span>{t.aboutMe}</span>
          </h2>
          <p className="about-text">
            {t.aboutText}
          </p>
          <div className="about-info">
            <div className="info-item">
              <span className="info-label">{t.nameLabel}</span>
              <span className="info-value">Matheus Marques</span>
            </div>
            <div className="info-item">
              <span className="info-label">{t.ageLabel}</span>
              <span className="info-value">{t.ageValue}</span>
            </div>
            <div className="info-item">
              <span className="info-label">{t.educationLabel}</span>
              <span className="info-value">{t.educationValue}</span>
            </div>
            <div className="info-item">
              <span className="info-label">{t.companyLabel}</span>
              <span className="info-value">{t.companyValue}</span>
            </div>
          </div>
          <a href="#contact" className="btn btn-primary">{t.contactBtn}</a>
        </div>
        <div className="about-image">
          <div className="about-image-placeholder">
            <img src={profilePhoto} alt="Foto de Matheus Marques" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
