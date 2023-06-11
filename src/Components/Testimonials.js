import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
const testimonialDate=[
    {
        id:1,
        name:"Zackary Ali Hassan",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        designation:"CEO"
    },
     {
        id:2,
        name:"Halima Khalif Mohamed",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        designation:"Office Manager"
    },
     {
        id:3,
        name:"Hashi Ahmed ALi",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        designation:"HRM"
    }
]
function AppTestimonials() {
  return (
    <section id='testimonials' className='testimonials-block'>
        <Container fluid>
            <div className='title-holder'>
                <h3>CLIENT TESTIMONIALS</h3>
                <div className='subtitle'>what client says about us</div>
            </div>
        <Carousel controls={false}>
           {
            testimonialDate.map(testimonials =>{
                return(
                     <Carousel.Item key={testimonials.id}>
                        <blockquote>
                            <p>{testimonials.description}</p>
                            <cite>
                                <span className='name'>{testimonials.name}</span>
                                <span className='designation'>{testimonials.designation}</span>
                            </cite>
                        </blockquote>
                    </Carousel.Item>
                )
            })
           }
        </Carousel>
        </Container>
    </section>
  )
}

export default AppTestimonials;