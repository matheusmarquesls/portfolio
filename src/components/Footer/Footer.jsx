import './Footer.css'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#">MM<span>.</span></a>
            <p>{t.footerDesc}</p>
          </div>
          
          <div className="footer-links">
            <h4>{t.quickLinks}</h4>
            <ul>
              <li><a href="#home">{t.home}</a></li>
              <li><a href="#about">{t.about}</a></li>
              <li><a href="#skills">{t.skills}</a></li>
              <li><a href="#projects">{t.projects}</a></li>
              <li><a href="#contact">{t.contact}</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>{t.socialNetworks}</h4>
            <div className="social-icons">
              <a href="#" aria-label="GitHub">GitHub</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Matheus Marques. {t.rights}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
