import './Header.css'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'

function Header() {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          MM<span>.</span>
        </a>
        <div className="header-right">
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#about">{t.about}</a></li>
              <li><a href="#skills">{t.skills}</a></li>
              <li><a href="#projects">{t.projects}</a></li>
              <li><a href="#contact">{t.contact}</a></li>
            </ul>
          </nav>
          <div className="language-switcher">
            <button 
              className={`flag-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => toggleLanguage('en')}
              title="English"
            >
              <img src="https://flagcdn.com/w40/us.png" alt="English" />
            </button>
            <button 
              className={`flag-btn ${language === 'pt' ? 'active' : ''}`}
              onClick={() => toggleLanguage('pt')}
              title="Português"
            >
              <img src="https://flagcdn.com/w40/br.png" alt="Português" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
