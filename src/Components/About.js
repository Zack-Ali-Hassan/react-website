import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import img1 from '../Assets/Images/p1.jpeg'
import ProgressBar from 'react-bootstrap/ProgressBar';
function AppAbout() {
    const dataAnalytics = 80;
    const graphicDesign = 90;
    const programing = 60;
  return (
    <section id='about' className='block about-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>About us</h2>
                <div className='subtitle'>
                    Learn more about us
                </div>
            </div>
            <Row>
                <Col sm={6}>
                <img src={img1}></img>
                </Col>
                <Col sm={6}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text making it over 2000 years old 
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC containing Lorem Ipsum passages Lorem Ipsum is simply dummy text of the printing and typesetting industry, but also the leap into electronic typesetting, remaining essentially unchanged. It .</p>
                <div className='progress-block'>
                    <h4>DATA ANALYSIS</h4>
                    <ProgressBar now={dataAnalytics} label={`${dataAnalytics}%`} />
                </div>

                <div className='progress-block'>
                    <h4>GRAPHIC DESIGN</h4>
                    <ProgressBar now={graphicDesign} label={`${graphicDesign}%`} />
                </div>

                <div className='progress-block'>
                    <h4>PROGRAMMING</h4>
                    <ProgressBar now={programing} label={`${programing}%`} />
                </div>
                </Col>
            </Row>
       </Container>
    </section>
  )
}

export default AppAbout;