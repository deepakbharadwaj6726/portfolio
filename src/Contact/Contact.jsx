import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Contact/Contact.css'

function Contact() {
  return (
    <Container className='contactt'>
     
        <h3 style={{ textAlign: 'center' }}>CONTACT</h3>     
      <Col xs={5} className="mx-auto pt-3 " >
        <Form>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control type="number" placeholder="Mobile Number" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control className="pb-5" type="textarea" placeholder="text area" />
          </Form.Group>

          <Button variant="dark" type="submit">
            SEND
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

export default Contact;