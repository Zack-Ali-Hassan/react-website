import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
const pricingDate=[
    {
        id:1,
        plane:"Basic",
        price:'$50',
        features:["C#","JAVA","PHOTOSHOP","Illustrator","Arabic"],
        link:"https://www.google.com"
    },
        {
        id:2,
        plane:"Premium",
        price:'$250',
        features:["C#","JAVA","PHOTOSHOP","Illustrator","Arabic"],
        link:"https://www.facebook.com"
    },
        {
        id:3,
        plane:"Ultimate",
        price:'$550',
        features:["Arabic","Illustrator","Java","Photoshop","C#"],
        link:"https://www.twitter.com"
    }
]
function AppPricing() {
  return (
    <section id='pricing' className='block pricing-block'>
          <Container fluid>
            <div className='title-holder'>
                <h3>PRICING & PLANS</h3>
                <div className='subtitle'>check our pricing & plans</div>
            </div>
            <Row>
                 {
                pricingDate.map(pricing=>{
                    return(
                        <Col sm={4} key={pricing.id}>
                            <div className='heading'>
                                <h3>{pricing.plane}</h3>
                                <span className='price'>{pricing.price}</span>
                            </div>
                            <div className='content'>
                                <ListGroup>
                                    {
                                        pricing.features.map((feature,index) =>{
                                            return(
                                    <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                                    )
                                        })
                                    }
                                </ListGroup>
                            </div>
                            <div className='btn-holder'>
                                <a href={pricing.link} className='btn btn-primary'>Order Now</a>
                            </div>
                         </Col>
                    )
                })
            }
                
            </Row>
         </Container>
    </section>
  )
}

export default AppPricing;