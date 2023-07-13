import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <p>DEEPAK KAILASH BHARADWAJ</p>
          <p>Lorem ipsum dolor s amet consectetur adipisicing elit. Dignissimos eum pariatur.</p>
        </Col>
        <Col>
          <p>Subscribre to get important updates</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              SUBSCRIBE
            </Button>
          </Form>

        </Col>
        <Col>
        <p>Follow Us</p>      
        
        </Col>
        <Col><p>Call Us</p>
        <p>+919960426720</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;