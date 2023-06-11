import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
const workDate=[
    {
        id:1,
        image:require("../Assets/Images/image3.jpg"),
        title:"Restaurant",
        subtitle:"Web Design",
        link:"https://www.google.com"
    },
    {
        id:2,
        image:require("../Assets/Images/2.jpg"),
         title:"The Man",
        subtitle:"Photographer",
        link:"https://www.google.com"
    },
    {
        id:3,
        image:require("../Assets/Images/23.jpg"),
         title:"Different",
        subtitle:"Branding",
        link:"https://www.google.com"
    },
    {
        id:4,
        image:require("../Assets/Images/p1.jpeg"),
         title:"Happy day",
        subtitle:"Web Design",
        link:"https://www.google.com"
    },
    {
        id:5,
        image:require("../Assets/Images/Image4.jpeg"),
         title:"Goal",
        subtitle:"Photographer",
        link:"https://www.google.com"
    },
    {
        id:6,
        image:require("../Assets/Images/images (15).jpg"),
        title:"Timajare",
        subtitle:"Branding",
        link:"https://www.google.com"
    },
    {
        id:7,
        image:require("../Assets/Images/Assignment.jpg"),
        title:"Mountains",
        subtitle:"Photographer",
        link:"https://www.google.com"
    },
    {
        id:8,
        image:require("../Assets/Images/7.jpg"),
        title:"Office",
        subtitle:"Web Design",
        link:"https://www.google.com"
    },
    {
        id:9,
        image:require("../Assets/Images/21.jpg"),
        title:"Muufo",
        subtitle:"Photographer",
        link:"https://www.google.com"
    }
]
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className='block works-block'>
        <Container fluid>
            <div className="title-holder">
                <h2>Our Works</h2>
                <div className='subtitle'>our awesome works
                </div>
            </div>
            <Row className='portfoliolist'>
                {
                    workDate.map(work =>{
                        return(
                            <Col sm={4}>
                                <div className='portfolio-wrapper' key={work.id}>
                                    <a href={work.link}>
                                        <img src={work.image}></img>
                                    </a>
                                    <div className='label text-center'>
                                        <h3>{work.title}</h3>
                                        <p>{work.subtitle}</p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
                
            </Row>
            <Pagination>{items}</Pagination>
        </Container>
    </section>
  )
}

export default AppWorks;