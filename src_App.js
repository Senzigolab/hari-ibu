import React, { useState } from "react";
import "./App.css";

const quotes = [
  "Terima kasih telah menjadi ibu terbaik di dunia!",
  "Cintamu tak tergantikan, Ibu.",
  "Semoga selalu sehat dan bahagia, Bu!",
  "Doamu selalu menjadi pelindungku."
];

const photos = [
  "https://source.unsplash.com/featured/?mother,child", // photo1
  "https://source.unsplash.com/featured/?family",       // photo2
  "https://source.unsplash.com/featured/?mom",          // photo3
];

function App() {
  const [showQuote, setShowQuote] = useState(false);
  const [randomQuote, setRandomQuote] = useState("");
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [flip, setFlip] = useState(false);
  const [hug, setHug] = useState(false);

  const handleShowQuote = () => {
    setShowQuote(true);
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };
  const handleNextPhoto = () => setGalleryIdx((galleryIdx + 1) % photos.length);
  const handlePrevPhoto = () => setGalleryIdx((galleryIdx - 1 + photos.length) % photos.length);

  return (
    <div className="container">
      <header className="hero">
        <h1>Selamat Hari Ibu!</h1>
        <p>Untuk ibuku tersayang, terima kasih atas segalanya ❤</p>
      </header>
      <section className="interactive">
        <div>
          <button className="favorite-btn" onClick={handleShowQuote}>Kirim Ucapan</button>
          {showQuote && (
            <div className="quote-popup">
              <p>{randomQuote}</p>
              <button onClick={() => setShowQuote(false)}>Tutup</button>
            </div>
          )}
        </div>
        <div className="gallery">
          <h2>Gallery Kenangan</h2>
          <img src={photos[galleryIdx]} alt="Kenangan bersama Ibu" className="gallery-img"/>
          <div>
            <button onClick={handlePrevPhoto}>⟨</button>
            <button onClick={handleNextPhoto}>⟩</button>
          </div>
        </div>
        <div className="flip-card-section">
          <h2>Terima kasih Ibu</h2>
          <div className={`flip-card${flip ? ' flipped' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p>Klik untuk buka pesan</p>
              </div>
              <div className="flip-card-back">
                <p>Semua pengorbananmu, tulus dari hati. Aku sangat mencintaimu, Ibu!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="playlist-section">
          <h2>Lagu Favorit Ibu</h2>
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX7gIoKXt0gmx?utm_source=generator"
            width="80%" height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
          ></iframe>
        </div>
        <div>
          <button className="hug-btn" onClick={() => setHug(true)}>
            Klik untuk dapat pelukan virtual 🤗
          </button>
          {hug && (
            <div className="hug-anim">
              <img src="https://media.giphy.com/media/l0MYQqQp7T8ZD31wY/giphy.gif" alt="Pelukan virtual" />
              <p>Peluk dari anakmu, Bu! ❤</p>
              <button onClick={() => setHug(false)}>Terima kasih!</button>
            </div>
          )}
        </div>
      </section>
      <footer>
        <p>Dengan cinta, dari anakmu 💕</p>
      </footer>
    </div>
  );
}

export default App;