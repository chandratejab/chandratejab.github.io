import React from 'react';
import './MainPage.css';

interface Experience {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer III',
    company: 'FactSet Research Systems',
    startDate: 'May 2021',
    endDate: 'Present',
    description: [
      "Developed REST APIs for company portfolio data that are consumed by FactSet workstation frontend and by other internal services",
      "Designed and built data feeds for financial content that extracts, processes and enriches millions of data points. Provided integrations for data from other content teams to improve overall datasets that are consumed by managed API service",
      "Built scripts for processing data that handles complex logic for various calculations, and used other internal solutions for data workloads, storage and scheduling workflows",
      "Interacted with stakeholders/product managers on regular basis on project requirements and status updates",
      "Participating in architecture design reviews and code reviews. Mentored interns and new resources on technologies and business",
      "Monitoring the infrastructure for services and feeds on AWS and FactSet's internal cloud. Maintaining existing data collection feeds and .Net WPF based collection applications"
    ]
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'ACS Solutions',
    startDate: 'Dec 2016',
    endDate: 'May 2021',
    description: [
      "Full Stack Engineer, worked with clients in healthcare, finance and manufacturing industries in designing and developing web applications",
      "Developed APIs and user interfaces using Flask REST and React with Redux for the applications related to energy trading that enable traders to create orders, explore and modify power plant schedules etc.",
      "Improved data retrieval performance in process logs service by maintaining separate collections for recently used data and old data with Time-To-Live indexes, which reduced overall load by 40% on the MongoDB server",
      "Created a service for parameter store manager, which is used by 20+ services in the system for storing, retrieving and updating the application specific parameters through APIs as well as User Interface",
      "Implemented consumers that fetch, process and store data, and publish messages to Message Queues",
      "Developed a frontend application from scratch for a semiconductor industry client using React with Redux. Built custom reusable components for Form elements, Tables, Visualization plots etc. as per the UX designs",
      "Implemented asynchronous task setup to run tasks on background for optimization models and data migration tasks, using Celery and Redis"
    ]
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
          <p>
            <ul>
              {experience.description.map(point => <li>{point}</li>)}
            </ul>
          </p>
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
                <a href="https://github.com/chandratejab" target="_blank" rel="noopener noreferrer">
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
          <p>
            <ul>
              <li>
                I sometimes like to solve Rubik's cubes. Checkout out my <a href="https://www.worldcubeassociation.org/persons/2017BAVA01">WCA profile</a> for official results :)
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
