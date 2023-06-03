import React from 'react';
import './MainPage.css';

interface Experience {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer III',
    company: 'FactSet Research Systems',
    startDate: 'May 2021',
    endDate: 'Present',
    description: 'Worked on front-end and back-end development projects.'
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'ACS Solutions',
    startDate: 'Dec 2016',
    endDate: 'May 2021',
    description: 'Developed responsive websites using HTML, CSS, and JavaScript.'
  },
  // Add more experiences as needed
];

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <a href="#experience" onClick={() => scrollToSection('experience')}>
        Experience
      </a>
      <a href="#misc" onClick={() => scrollToSection('misc')}>
        Misc
      </a>
    </header>
  )
}

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="experience-timeline">
      {experiences.map((experience) => (
        <div key={experience.id} className="experience-item">
          <h2>{experience.title}</h2>
          <h3>{experience.company}</h3>
          <p>
            {experience.startDate} - {experience.endDate}
          </p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="intro-container">
          <div className="content">
            <div className="left">
              <h1>Hello! I'm Chandra Teja Bavandla</h1>
              <p>
                I'm a software developer with industry experience in building microservices and data feeds at scale.
              </p>
              <div className="social-links">
                <a href="https://in.linkedin.com/in/chandratejabavandla/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="https://twitter.com/chandratejact" target="_blank" rel="noopener noreferrer">
                  <img src="/images/twitter.svg" alt="Twitter" />
                </a>
                <a href="https://github.com/chandratejabavandla" target="_blank" rel="noopener noreferrer">
                  <img src="/images/github.svg" alt="GitHub" />
                </a>
                <a href="mailto:chandrateja.bavandla@gmail.com">
                  <img src="/images/email.png" alt="Email" />
                </a>
              </div>
            </div>
            <div className="right">
              <img className="my-pic" src="/images/myself.jpg" alt="Profile" />
            </div>
          </div>
        </div>
        <hr className="hr-blur"></hr>
        <div id="experience" className="section">
          <h2>Experience</h2>
          <ExperienceTimeline />
        </div>
        <div id="misc" className="section">
          <h2>Misc</h2>
          {/* Render Projects component here */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
