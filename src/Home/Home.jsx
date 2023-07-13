import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

import '../Home/Home.css';
function Home() {
  return (
    <Container >
      <header className='header'>
        <h2><b>HEY, I'M DEEPAK KAILASH BHARADWAJ</b></h2>
        <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <Button>PROJECTS</Button>
      </header>   
    </Container>
  );
}

export default Home;