import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const teamDate = [
  {
    id: 1,
    image: require("../Assets/Images/p1.jpeg"),
    name: "Zackary Ali Hassan",
    destignation: "CEO",
    faceLink: "https://www.facebook.com",
    twitLink: "https://www.twitter.com",
    linkedLink: "https://www.google.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    image: require("../Assets/Images/p1.jpeg"),
    name: "Ahmed Abdi Ahmed",
    destignation: "Office Manager",
    faceLink: "https://www.facebook.com",
    twitLink: "https://www.twitter.com",
    linkedLink: "https://www.google.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    image: require("../Assets/Images/p1.jpeg"),
    name: "Hassan Mohamed Ali",
    destignation: "Administrator office",
    faceLink: "https://www.facebook.com",
    twitLink: "https://www.twitter.com",
    linkedLink: "https://www.google.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    image: require("../Assets/Images/p1.jpeg"),
    name: "Adan Mohamed Raage",
    destignation: "HRM",
    faceLink: "https://www.facebook.com",
    twitLink: "https://www.twitter.com",
    linkedLink: "https://www.google.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    image: require("../Assets/Images/p1.jpeg"),
    name: "Zackary Ali Hassan",
    destignation: "CEO",
    faceLink: "https://www.facebook.com",
    twitLink: "https://www.twitter.com",
    linkedLink: "https://www.google.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    image: require("../Assets/Images/p1.jpeg"),
    name: "Zackary Ali Hassan",
    destignation: "CEO",
    faceLink: "https://www.facebook.com",
    twitLink: "https://www.twitter.com",
    linkedLink: "https://www.google.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 7,
    image: require("../Assets/Images/p1.jpeg"),
    name: "Zackary Ali Hassan",
    destignation: "CEO",
    faceLink: "https://www.facebook.com",
    twitLink: "https://www.twitter.com",
    linkedLink: "https://www.google.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 8,
    image: require("../Assets/Images/p1.jpeg"),
    name: "Ali Ahmed Abdule",
    destignation: "CEO",
    faceLink: "https://www.facebook.com",
    twitLink: "https://www.twitter.com",
    linkedLink: "https://www.google.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Teams</h2>
          <div className="subtitle">some of our experts</div>
        </div>
        <Row>
          {teamDate.map((team) => {
            return (
              <Col sm={3} key="team.id">
                <div className="image">
                  <Image src={team.image}></Image>
                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        <li>
                          <a href={team.faceLink}>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href={team.twitLink}>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href={team.linkedLink}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>{team.name}</h3>
                  <span>{team.destignation}</span>
                  <p>{team.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppTeams;
