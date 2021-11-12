import * as React from 'react';
import Profile from './assets/about.jpg';
import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

type AboutProps = {};

export const About: React.FC<AboutProps> = () => (
  <section id="about">
    <Container>
      <div className="title-box text-center">
        <h1 className="title-a">ABOUT ME</h1>
        <div className="line-mf" />
      </div>
      <div className="box-shadow-full">
        <Row>
          <Column lg={6}>
            <div className="about-me pt-4 pb-pt-md-0">
              <p className="lead">
                My name is Paul Serafimescu and I'm a sophomore Computer Science and Engineering major at UCLA.
              </p>
              <p className="lead">
                In the past, I have job shadowed at vCom Solutions where I was introduced to C# .NET and MVC architecture,
                and built a grades app utilizing Microsoft Entity Framework and .NET Core on the backend.
                I have also interned with Sonoma State University conducting research on 5G wave propagation.
                My interests include full stack web development and machine learning.
              </p>
              <p className="lead">
                Outside of writing code, I enjoy reading, particularly about economic theory and law (or the intersection of the two!),
                hiking, and playing Rachminov and Chopin on the piano.
              </p>
            </div>
          </Column>
          <Column lg={6} className="d-none d-lg-flex flex-column border-left">
            <img className="box-img" src={Profile} alt="" />
          </Column>
        </Row>
      </div>
    </Container>
  </section>
);