import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";

function AudioTrack({ title, src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
    } else {
      a.play();
    }
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    setProgress((a.currentTime / a.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
  };

  const handleEnded = () => setPlaying(false);

  const handleScrub = (e) => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    a.currentTime = pct * a.duration;
    setProgress(pct * 100);
  };

  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="audio-track">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "var(--accent)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--accent-light)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--accent)")
          }
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>

        {/* Track info + scrubber */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="audio-track-title">{title}</div>
          {/* Progress bar */}
          <div
            onClick={handleScrub}
            style={{
              height: 4,
              borderRadius: 2,
              background: "var(--border-color)",
              cursor: "pointer",
              position: "relative",
              marginTop: 6,
            }}
          >
            <div
              style={{
                height: "100%",
                borderRadius: 2,
                background: "var(--accent-light)",
                width: `${progress}%`,
                transition: "width 0.1s linear",
              }}
            />
          </div>
        </div>

        {/* Time */}
        <div
          style={{
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            flexShrink: 0,
            minWidth: 36,
            textAlign: "right",
          }}
        >
          {fmt(audioRef.current?.currentTime)}
          {duration ? ` / ${fmt(duration)}` : ""}
        </div>
      </div>
    </div>
  );
}

const loremPage = `Some highlights of recent work and achievements with my 30 year run in the music industry. `;

const lorem100 = `ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.`;

const songs = [
  {
    title: "Not Yet",
    src: "/assets/music/album/Brian Wilkinson - Not Yet.mp3",
  },
  {
    title: "No One Told You",
    src: "/assets/music/album/Brian Wilkinson - No One Told You.mp3",
  },
  {
    title: "I Think I Kinda Know Myself",
    src: "/assets/music/album/Brian Wilkinson - I Think I Kinda Know Myself.mp3",
  },
];

export default function MusicCareer() {
  const [showVideo, setShowVideo] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);

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
              Music Career &amp; Achievements
            </h1>
          </div>
          <p className="page-description">{loremPage}</p>
        </Container>
      </div>

      {/* ── Music Cards ── */}
      <Container>
        <Row className="g-4 justify-content-center">
          {/* ── TV Placements ── */}
          <Col md={4}>
            <div className="music-card">
              <video
                className="music-card-img"
                style={{ objectFit: "cover" }}
                muted
                playsInline
                preload="metadata"
                src="/assets/music/Recent FOX Placement.mp4#t=0.5"
              />
              <div className="music-card-body">
                <div className="music-card-title">TV Placements</div>
                <div className="music-card-desc">{lorem100}</div>
              </div>
              <div className="music-card-footer">
                <button
                  className="btn btn-view"
                  onClick={() => setShowVideo(true)}
                >
                  View
                </button>
              </div>
            </div>
          </Col>

          {/* ── Recent Album Release ── */}
          <Col md={4}>
            <div className="music-card">
              <img
                src="/assets/music/album/Still Water Portrait 18.jpg"
                alt="Still Water Album Art"
                className="music-card-img"
              />
              <div className="music-card-body">
                <div className="music-card-title">Recent Album Release</div>
                <div className="music-card-desc">{lorem100}</div>
              </div>
              <div className="music-card-footer">
                <button
                  className="btn btn-view"
                  onClick={() => setShowAlbum(true)}
                >
                  Hear
                </button>
              </div>
            </div>
          </Col>

          {/* ── Spotify ── */}
          <Col md={4}>
            <div className="music-card">
              <img
                src="/assets/music/Still WAnter Post 1 (no text).jpg"
                alt="Still Water Spotify"
                className="music-card-img"
              />
              <div className="music-card-body">
                <div className="music-card-title">Spotify</div>
                <div className="music-card-desc">{lorem100}</div>
              </div>
              <div className="music-card-footer">
                <a
                  href="https://open.spotify.com/album/3l56FzejOTaJfYd42Kqvqi?si=bLmxnfZDQwego4RabD2qjw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-view"
                >
                  Hear More
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* ── Video Modal ── */}
      <Modal
        show={showVideo}
        onHide={() => setShowVideo(false)}
        size="xl"
        centered
        className="modal-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Recent FOX Placement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video
            controls
            autoPlay
            style={{ width: "100%", borderRadius: 6, background: "#000" }}
            src="/assets/music/Recent FOX Placement.mp4"
          />
        </Modal.Body>
      </Modal>

      {/* ── Album Audio Modal ── */}
      <Modal
        show={showAlbum}
        onHide={() => setShowAlbum(false)}
        size="lg"
        centered
        className="modal-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Still Water - Brian Wilkinson</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "1.5rem" }}>
          {songs.map((song) => (
            <AudioTrack key={song.title} title={song.title} src={song.src} />
          ))}
        </Modal.Body>
      </Modal>

      <footer className="footer-bar">
        © {new Date().getFullYear()} Brian Wilkinson — Personal Portfolio
      </footer>
    </div>
  );
}
