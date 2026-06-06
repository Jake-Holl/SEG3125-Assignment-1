import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './components/MyNavbar.jsx'
import Image from 'react-bootstrap/Image';
import { Link } from "react-router";

function App() {
  return (
    <>
    <MyNavbar />
    <Container className='mt-5'>
      <Stack>
        <Container className='bg-primary rounded p-3'>
          <Row>
            <Col xs={9}>
              <h3>Hello! I'm Jake</h3>
              <h5 style={{ textAlign: 'left' }} >I am a second year software engineering student at the University of Ottawa, and I am currently enrolled in a UI design course. My goal is to have a properly established UI workflow by the end of the course, which will benefit me in all of my future projects.</h5>
            </Col>
            <Col>
              <Image src='/jake.jpeg' rounded fluid></Image>
            </Col>
          </Row>
        </Container>
        <h1>My projects</h1>
        <Container>
          <Row className='g-2'>
            <Col>
              <Link to='https://seg-3125-assignment-2-woad.vercel.app/' className='text-decoration-none text-body'>
                <Card bg='primary'>
                  <Card.Img className='rounded p-1' variant='top' src='/service.jpg' />
                  <Card.Body>
                    <Card.Title>The Shop</Card.Title>
                    <Card.Text>
                      Barber Shop Website for Assignment 2
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to='/soon' className='text-decoration-none text-body'>
                <Card bg='primary'>
                  <Card.Img className='rounded p-1' variant='top' src='/memgame.jpg' />
                  <Card.Body>
                    <Card.Title>Memory Game</Card.Title>
                    <Card.Text>
                      This project is coming soon
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to='/soon' className='text-decoration-none text-body'>
                <Card bg='primary'>
                  <Card.Img className='rounded p-1' variant='top' src='/ecomm.jpg' />
                  <Card.Body>
                    <Card.Title>E-commerce Site</Card.Title>
                    <Card.Text>
                      This project is coming soon
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to='/soon' className='text-decoration-none text-body'>
                <Card bg='primary'>
                  <Card.Img className='rounded p-1' variant='top' src='/analytics.jpg' />
                  <Card.Body>
                    <Card.Title>Analytics Site</Card.Title>
                    <Card.Text>
                      This project is coming soon
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </Stack>
    </Container>
    </>
  )
}

export default App
