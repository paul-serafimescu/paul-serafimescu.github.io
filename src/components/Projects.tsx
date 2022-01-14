import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectData from './assets/Projects.json';

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  languages: string[];
  ghLink: string;
};

interface ProjectsProps {};

export const Project: React.FC<ProjectProps> = ({ image, title, description, languages, ghLink }) => {
  return (
    <Column md={6}>
      <div className="project-box">
        <div className="project-img">
          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
        </div>
        <div className="project-description">
          <Row>
            <Column sm={12}>
              <h4 className="p-title">{title}</h4>
              <p className="font-weight-light">{description}</p>
              <div className="w-more">
                <span className="w-category">{languages.join(', ')}</span>
                <a className="project-link" href={ghLink} target="_blank" rel="noreferrer">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </Column>
          </Row>
        </div>
      </div>
    </Column>
  );
}

export const Projects: React.FC<ProjectsProps> = () => (
  <section id="projects" className="portfolio-mf sect-pt4 route">
    <Container>
      <div className="title-box text-center">
        <h1 className="title-a">PROJECTS</h1>
        <div className="line-mf" />
      </div>
      <Row>
        {ProjectData.map(project => (
          <Project
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            languages={project.languages}
            ghLink={project.ghLink}
          />
        ))}
      </Row>
    </Container>
  </section>
);
