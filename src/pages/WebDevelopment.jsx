import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const projects = [
  {
    title: "Declatree Intelligent Agents",
    image: "/assets/web-dev-projects/DeclatTree AI Agents.png",
    url: "https://www.declatree.com",
  },
  {
    title: "Dev Landing",
    image: "/assets/web-dev-projects/Dev Landing.png",
    url: "https://www.wingshotdev.com",
  },
  {
    title: "Full Stack E-Commerce",
    image: "/assets/web-dev-projects/Full Stack E-Commerce.png",
    url: "https://www.wingshot.dev",
  },
];

const loremDescription = `Over the last couple years I have made a hard-pivot into Software Engineering where I recently completed a 6 Month bootcamp at Coding Temple. I spent intensive time learning cutting edge Front End, Back End and System Engineering Strategies. Here are a few projects I am proud of. `;

export default function WebDevelopment() {
  return (
    <div className="page-wrapper">
      {/* ── Page Hero ── */}
      <div className="page-hero">
        <Container>
          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>
          <div className="section-title-bar mb-3">
            <h1
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 800,
                margin: 0,
                color: "var(--text-primary)",
              }}
            >
              Web Development Projects
            </h1>
          </div>
          <p className="page-description">{loremDescription}</p>
        </Container>
      </div>

      {/* ── Project Cards ── */}
      <Container>
        <Row className="g-4">
          {projects.map((project) => (
            <Col md={4} key={project.title}>
              <div className="project-card">
                <div className="project-card-title">{project.title}</div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-img"
                />
                <div className="project-card-footer">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-view"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="footer-bar">
        © {new Date().getFullYear()} Brian Wilkinson — Personal Portfolio
      </footer>
    </div>
  );
}
