import React, {
  useState
} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import $ from 'jquery';

type NavBarProps = {};

export function NavBar(props: NavBarProps) {

  const [scrolled, setScrolled] = useState(false);

  $(window).on('scroll', function() {
    let height = $('.navbar').height() as number;
    setScrolled($(window).scrollTop() as number >= height);
  });

  const sections = {
    Home: '#home',
    About: '#about',
    Projects: '#projects',
    Contact: '#contact'
  };

  return (
    <React.Fragment>
      <Navbar id="navbar" collapseOnSelect expand="lg" className={scrolled ? "scrolled-nav-bar" : "faint-white-bg"} bg={scrolled ? "light" : undefined} variant={scrolled ? "light" : undefined} fixed="top">
        <Navbar.Brand className={scrolled ? "alternative-brand" : undefined} href="#home">
          <h3>Paul Serafimescu</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {Object.entries(sections).map(([key, value]) => (
              <Nav.Link className={scrolled ? "navlink-other" : undefined} id={key} key={key} href={value}>{key}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
