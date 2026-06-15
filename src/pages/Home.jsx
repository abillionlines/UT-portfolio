import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";

const cards = [
  {
    to: "/transcripts",
    icon: "/icons/transcript.svg",
    title: "Transcripts",
    description:
      "Academic records from institutions attended, documenting completed coursework, grades, and credentials earned throughout my educational journey.",
  },
  {
    to: "/web-development",
    icon: "/icons/code.svg",
    title: "Web Development Projects",
    description:
      "A showcase of full-stack and front-end applications built with modern frameworks and tools, demonstrating technical skills and creative problem-solving.",
  },
  {
    to: "/music-career",
    icon: "/icons/music.svg",
    title: "Music Career & Achievements",
    description:
      "Highlights from a professional music career including TV placements, album releases, and platform presence — demonstrating discipline and creative excellence.",
  },
];

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="hero-section">
        <Container>
          <div
            className="hero-card"
            style={{ position: "relative", overflow: "visible" }}
          >
            <Row className="align-items-center g-5">
              <Col md={7}>
                <p className="hero-greeting">Hello! My name is</p>
                <h1 className="hero-name">Brian Wilkinson</h1>
                <p className="hero-subtitle">
                  Returning student with a passion for technology, creativity,
                  and continuous learning. I bring real-world experience in
                  software development and the arts to the academic environment.
                </p>
                <button
                  className="btn hero-btn"
                  onClick={() => setShowContact(true)}
                >
                  Contact
                </button>
              </Col>
            </Row>
            {/* Headshot — absolutely positioned so it never affects the card's size */}
            <div
              className="d-none d-md-block"
              style={{
                position: "absolute",
                right: "calc(-2rem + 75px)",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <img
                src="/assets/headshot.jpeg"
                alt="Brian Wilkinson"
                style={{
                  width: 490,
                  height: 490,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid var(--accent)",
                  boxShadow: "0 0 40px rgba(74,124,89,0.25)",
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── About ── */}
      <section className="about-section">
        <Container>
          <div style={{ paddingLeft: "2.5rem" }}>
            <div className="section-title-bar mb-3">
              <h2 style={{ fontSize: "2.5rem" }}>About Me</h2>
            </div>
            <p
              className="about-text"
              style={{ maxWidth: 760, fontSize: "1.21rem" }}
            >
              I am a 43 year old meta-cognitive that has spent the last 30 years
              of my life perfecting a craft that lives at the intersection of
              technical and creative. I've logged well over 10,000 hours as a
              guitarist/singer, and well over 10,000 hours as a Audio Engineer
              and Producer. I am looking to get re-involved in academia to
              position myself as a contributer in the new technological eras we
              are upon. My experience with formal and non-formal education is
              vast, as well as more than a decade of experience running my own
              business. I've decided it's time for me to take a step back and
              re-align with how emerging technologies are changing the world; I
              see Utah Tech as a perfect place for this kind of focus.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Portfolio Cards ── */}
      <section className="skills-section">
        <Container>
          <div className="section-title-bar mb-4">
            <h2>Portfolio</h2>
          </div>
          <Row className="g-4">
            {cards.map((card) => (
              <Col md={4} key={card.to}>
                <Link to={card.to} className="skill-card">
                  <img src={card.icon} alt="" className="skill-card-icon" />
                  <div className="skill-card-title">{card.title}</div>
                  <div className="skill-card-body">{card.description}</div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer className="footer-bar">
        © {new Date().getFullYear()} Brian Wilkinson — Personal Portfolio
      </footer>

      {/* ── Contact Modal ── */}
      <Modal
        show={showContact}
        onHide={() => setShowContact(false)}
        centered
        className="modal-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "2rem" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <img
                src="/icons/email.svg"
                alt=""
                style={{ width: 22, opacity: 0.7, flexShrink: 0 }}
              />
              <a
                href="mailto:brian@wingshot.dev"
                style={{
                  color: "var(--accent-light)",
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                brian@wingshot.dev
              </a>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <img
                src="/icons/phone.svg"
                alt=""
                style={{ width: 22, opacity: 0.7, flexShrink: 0 }}
              />
              <a
                href="tel:4806770473"
                style={{
                  color: "var(--accent-light)",
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                (480) 677-0473
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
