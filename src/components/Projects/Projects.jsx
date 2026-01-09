import './Projects.css'
import project1Image from '../../photos/image.png'
import project2Image from '../../photos/image2.png'
import project3Image from '../../photos/image3.png'
import project4Image from '../../photos/image4.png'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations/translations'


function Projects() {
  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    {
      id: 1,
      title: t.project1Title,
      description: t.project1Desc,
      image: project1Image,
      tags: ['Html', 'Css','React', 'Git'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: t.project2Title,
      description: t.project2Desc,
      image: project2Image,
      tags: ['Java', 'Spring Boot', 'MySQL'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: t.project3Title,
      description: t.project3Desc,
      image: project3Image, 
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: t.project4Title,
      description: t.project4Desc,
      image: project4Image, 
      tags: ['.NET', 'Azure', 'SQL Server'],
      link: '#',
      github: '#'
    },
  ]

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">
          {t.myProjects} <span>{t.projectsTitle}</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="image-placeholder">
                    <span>📷</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>🔗</span> {t.viewProject}
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>📂</span> {t.github}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
