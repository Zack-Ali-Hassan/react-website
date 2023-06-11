import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const serviceDate=[
    {
        id:1,
        icon:"fas fa-clone",
        title:"the perfect 1 design of the website",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link:"https://www.google.com"
    },
    {
        id:2,
         icon:"fas fa-snowflake",
        title:"Enjoy the difference",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link:"https://www.facebook.com"
    },
    {
        id:3,
         icon:"fas fa-plug",
        title:"Start your future financial plane",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link:"https://www.instagram.com"
    },
    {
        id:4,
        icon:"fas fa-desktop",
        title:"Start your future financial plane",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link:"https://www.instagram.com"
    },{
        id:5,
        icon:"fas fa-trophy",
        title:"Start your future financial plane",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link:"https://www.instagram.com"
    },
    {
        id:6,
        icon:"fas fa-life-ring",
        title:"Start your future financial plane",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link:"https://www.instagram.com"
    }
    
]
function AppServices() {
   
  return (
    
    <section id="services" className='block services-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>Our Services</h2>
                <div className='subtitle'>Services we provide</div>
            </div>
            <Row>
                {
                    serviceDate.map(service =>{
                        return(
                            <Col sm={4} className='holder' key={service.id}>
                                <div className='icon'>
                                    <i className={service.icon}></i>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </Col>
                        )
                    })
                }
                
            </Row>
        </Container>
    </section>
  )
}

export default AppServices;