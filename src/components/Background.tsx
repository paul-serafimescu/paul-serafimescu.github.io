import * as React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BackgroundImage from './assets/background.jpg';

type BackgroundProps = {};

export const Background: React.FC<BackgroundProps> = () => (
  <Container id="home" fluid>
    <Row>
      <Image style={{height: '100vh', width: '100%', objectFit: 'cover'}} fluid src={BackgroundImage} />
      <div className="centered-text fade-in main-text">
        <h1 className="intro-title"><br />Paul Serafimescu</h1>
        <h3>UCLA Computer Science and Engineering</h3>
        <a href="https://github.com/paul-serafimescu" target="_blank" rel="noreferrer">
          <i className="icon fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/paul-serafimescu-b8431b220/" target="_blank" rel="noreferrer">
          <i className="icon fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </div>
    </Row>
  </Container>
);
