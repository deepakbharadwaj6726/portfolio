import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import '../About/About.css';


function About() {
  return (
    <Container >
      <section>
        <div className='about'>
          <h2 >ABOUT ME</h2>
          <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
        </div>
        <Row>
          <Col>
            <h3>Get To Know Me!</h3>
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
            </p>
            <p>
              I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </p>
            <Button>Contact</Button>
          </Col>
          <Col className='aboutright'>
            <h3>My Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>BOOTSTRAP</li>
              <li>JAVASCRIPT</li>
              <li>REACT JS</li>
            </ul>
          </Col>
        </Row>

      </section>


    </Container>
  );
}

export default About;