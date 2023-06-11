import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function AppContact() {
  return (
     <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                <h3>CONTACT US</h3>
                <div className='subtitle'>
                    get connected with u
                </div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control type="text" placeholder="Enter your full name" required/>
                        </Col>
                        <Col sm={4}>
                            <Form.Control type="email" placeholder="name@example.com" required/>
                        </Col>
                        <Col sm={4}>
                            <Form.Control type="tel" placeholder="Enter your contact number" required/>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                             <Form.Control as="textarea" placeholder="Enter your full name" required/>
                        </Col>
                    </Row>
                     <div className='btn-holder'>
                        <Button type="submit"> Submit</Button>
                     </div>
                </Form>
            </Container>
            <div className='google-map'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31781.90832681368!2d45.862697839550776!3d5.303435000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d63149336adb2ef%3A0x62feffbd0c1d184f!2sGuriceel!5e0!3m2!1sen!2sso!4v1683569370743!5m2!1sen!2sso"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className='fas fa-envelope'></i>
                            hello@domain.com
                        </li>
                         <li>
                            <i className='fas fa-phone'></i>
                            619222352
                        </li>
                         <li>
                            <i className='fas fa-map-marker-alt'></i>
                            Guriel, Galmudug
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
  )
}

export default AppContact;