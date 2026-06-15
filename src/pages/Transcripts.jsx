import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

const transcripts = [
  "Coding Temple",
  "Musicians Institute",
  "Tacoma Community College",
  "Utah Valley University",
  "Centennial High School",
];

const loremDescription = `Since High School I've been working to build a career in Music Technology and have aquired a unique mix of acreddited and non-accredited education. I am looking to find equivilancies at Utah Tech for credit so that I can accurately reflect my experience and education at my point of entry.`;

export default function Transcripts() {
  const [viewPdf, setViewPdf] = useState(null);

  const pdfPath = (name) =>
    `/assets/transcripts/${encodeURIComponent(name)}.pdf`;

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
              Transcripts
            </h1>
          </div>
          <p className="page-description">{loremDescription}</p>
        </Container>
      </div>

      {/* ── Cards ── */}
      <Container>
        <Row className="g-4">
          {transcripts.map((name) => (
            <Col sm={6} lg={4} key={name}>
              <div className="transcript-card">
                <div className="transcript-card-body">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: "0.6rem",
                    }}
                  >
                    <img
                      src="/icons/document.svg"
                      alt=""
                      className="transcript-card-icon"
                      style={{ marginBottom: 0, flexShrink: 0 }}
                    />
                    <div
                      className="transcript-card-title"
                      style={{
                        marginBottom: 0,
                        paddingBottom: 0,
                        lineHeight: 1,
                        position: "relative",
                        top: "-5px",
                      }}
                    >
                      {name}
                    </div>
                  </div>
                </div>
                <div className="transcript-card-footer">
                  <button
                    className="btn btn-view"
                    onClick={() => setViewPdf(name)}
                  >
                    View
                  </button>
                  <a
                    href={pdfPath(name)}
                    download={`${name}.pdf`}
                    className="btn btn-outline-accent"
                  >
                    Download
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ── PDF Viewer Modal ── */}
      <Modal
        show={!!viewPdf}
        onHide={() => setViewPdf(null)}
        size="xl"
        centered
        className="modal-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>{viewPdf}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: 0 }}>
          {viewPdf && (
            <iframe
              src={pdfPath(viewPdf)}
              title={viewPdf}
              style={{
                width: "100%",
                height: "78vh",
                border: "none",
                borderRadius: "0 0 8px 8px",
              }}
            />
          )}
        </Modal.Body>
      </Modal>

      <footer className="footer-bar">
        © {new Date().getFullYear()} Brian Wilkinson — Personal Portfolio
      </footer>
    </div>
  );
}
