import * as React from 'react';
import Container from 'react-bootstrap/Container';

type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
      <footer>
        <p>website source code found
          <a href="https://github.com/paul-serafimescu/personal-website"> here</a>
        </p>
      </footer>
    </Container>
  );
}

export default Footer;