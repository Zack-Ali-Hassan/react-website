import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const blogDate=[
    {
        id:1,
        title:"Zackary Ali Hassan",
        image:require("../Assets/Images/p1.jpeg"),
        date:"10 OCT 2022",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link:"https://www.twitter.com"
    },
    {
        id:2,
        title:"Zackary Ali Hassan",
        image:require("../Assets/Images/p1.jpeg"),
        date:"11 OCT 2022",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link:"https://www.google.com"
    },
    {
        id:3,
        image:require("../Assets/Images/Assignment.jpg"),
        title:"Zackary Ali Hassan",
        date:"12 OCT 2022",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link:"https://www.facebook.com"
    },
]
function AppBlog() {
  return (
    <section id='blog' className='block blog-block'>
        <Container fluid>
            <div className='title-holder'>
            <h3>LATEST FROM BLOG</h3>
            <div className='subtitle'>
                get our latest news from blog
            </div>
            </div>
            <Row>
                   {
                    blogDate.map(blog =>{
                        return(
                             <Col sm={4} key={blog.id}>
                                <div className='holder'>
                                <Card>
                                    <Card.Img variant="top" src={blog.image} />
                                    <Card.Body>
                                        <time>{blog.date}</time>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>
                                            {blog.description}
                                        </Card.Text>
                                        <a href={blog.date} className='btn btn-primary'> Read More <i className='fas fa-chevron-right'></i></a>
                                    </Card.Body>
                                </Card>
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

export default AppBlog