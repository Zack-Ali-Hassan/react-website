import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const heroDate=[
    {
        id:1,
        image:require("../Assets/Images/image3.jpg"),
        title:"the perfect 1 design of the website",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link:"https://www.google.com"
    },
    {
        id:2,
        image:require("../Assets/Images/Assignment.jpg"),
        title:"Enjoy the difference",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link:"https://www.facebook.com"
    },
    {
        id:3,
        image:require("../Assets/Images/7.jpg"),
        title:"Start your future financial plane",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link:"https://www.instagram.com"
    }
    
]

function AppHero() {
  return (
    <section id='home' className='hero-block'>
        <Carousel >
            {
            heroDate.map(hero =>{
                return(
                    <Carousel.Item key={hero.id}>
                        <img
                            className="d-block w-100"
                            src={hero.image}
                            alt={"Slide " + hero.id}
                        />
                    <Carousel.Caption>
                        <h3>{hero.title}</h3>
                        <p>{hero.description}</p>
                        <a className='btn btn-primary' href={hero.link}>Learn More <i className='fas fa-chevron-right'></i></a>
                    </Carousel.Caption>
                    </Carousel.Item>
                )
            })
            
            }
    </Carousel>
    </section>
  )
}

export default AppHero