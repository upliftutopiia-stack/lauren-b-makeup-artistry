"use client";

import { useEffect, useState } from "react";

const EMAIL = "laurenberkheimermua@gmail.com";
const INSTAGRAM = "https://www.instagram.com/laurenbmakeupartistry/";

const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Makeup Artistry Enquiry"
)}`;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    ["Home", "#top"],
    ["About", "#about"],
    ["Artistry", "#artistry"],
    ["Portfolio", "#portfolio"],
    ["Enquiries", "#contact"],
  ];

  return (
    <main id="top">
      <header className={`header ${menuOpen ? "menu-active" : ""}`}>
        <a href="#top" className="brand" onClick={closeMenu}>
          <span>Lauren B.</span>
          <small>MAKEUP ARTISTRY</small>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-contact" href={MAILTO}>
          ENQUIRE NOW <Arrow />
        </a>

        <button
          type="button"
          className={`hamburger ${menuOpen ? "active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <div
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <span className="mobile-overline">LAUREN B MAKEUP ARTISTRY</span>

          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                {label}
              </a>
            ))}
          </nav>

          <a href={MAILTO} className="mobile-contact" onClick={closeMenu}>
            SEND AN ENQUIRY <Arrow />
          </a>
        </div>
      </header>

      {/* HERO */}

      <section className="hero">
        <div className="hero-copy">
          <div className="hero-meta">
            <span>CENTRAL PENNSYLVANIA</span>
            <span>THE BEAUTY EDIT / 01</span>
          </div>

          <div className="hero-content">
            <span className="eyebrow">LAUREN B MAKEUP ARTISTRY</span>

            <h1>
              Beauty,
              <br />
              <em>beautifully</em>
              <br />
              you.
            </h1>

            <p>
              Makeup artistry for your memorable moments. Explore
              Lauren&apos;s work and get in touch to discuss your vision,
              occasion and appointment availability.
            </p>

            <div className="hero-actions">
              <a href={MAILTO} className="button button-dark">
                ENQUIRE WITH LAUREN <Arrow />
              </a>

              <a href="#artistry" className="text-link">
                EXPLORE ARTISTRY ↓
              </a>
            </div>
          </div>

          <div className="hero-bottom">
            <span>MAKEUP ARTISTRY · CENTRAL PA</span>
            <span>SCROLL TO DISCOVER ↓</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-frame">
            <span className="visual-top">AN EDITORIAL STUDY IN BEAUTY</span>

            <div className="visual-arch arch-one" />
            <div className="visual-arch arch-two" />
            <div className="visual-glow" />

            <div className="visual-word">
              <span>the art of</span>
              <strong>beauty.</strong>
              <em>✳</em>
            </div>

            <span className="visual-bottom">LAUREN B. / MAKEUP ARTISTRY</span>
          </div>

          <div className="visual-seal">
            <span>LB</span>
            <small>MAKEUP ARTISTRY</small>
          </div>
        </div>
      </section>

      {/* TICKER */}

      <div className="ticker" aria-hidden="true">
        LAUREN B MAKEUP ARTISTRY ✳ THE BEAUTY EDIT ✳ CENTRAL PA ✳
        LAUREN B MAKEUP ARTISTRY ✳ THE BEAUTY EDIT ✳ CENTRAL PA ✳
      </div>

      {/* ABOUT */}

      <section className="about section-pad" id="about">
        <div className="section-top">
          <span>01 / MEET THE ARTIST</span>
          <span>LAUREN B MAKEUP ARTISTRY</span>
        </div>

        <div className="about-grid">
          <div className="about-title">
            <span className="eyebrow">BEHIND THE BRUSHES</span>

            <h2>
              Meet
              <br />
              <em>Lauren.</em>
            </h2>

            <span className="about-star">✳</span>
          </div>

          <div className="about-copy">
            <h3>Makeup is personal. Your look should feel like you.</h3>

            <p>
              Lauren B Makeup Artistry is a makeup artist based in
              Central Pennsylvania. Discover her published work,
              explore inspiration for your occasion and reach out
              directly to discuss your makeup enquiry.
            </p>

            <p>
              For current services, availability and appointment
              arrangements, contact Lauren using the enquiry
              details below.
            </p>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="underlined"
            >
              MEET LAUREN ON INSTAGRAM <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ARTISTRY */}

      <section className="artistry section-pad" id="artistry">
        <div className="section-top">
          <span>02 / MAKEUP ARTISTRY</span>
          <span>THE LAUREN B EDIT</span>
        </div>

        <div className="artistry-grid">
          <div className="artistry-visual">
            <div className="artistry-orbit orbit-one" />
            <div className="artistry-orbit orbit-two" />

            <span className="artistry-word">artistry.</span>
            <small>BEAUTY IN EVERY DETAIL</small>
          </div>

          <div className="artistry-copy">
            <span className="eyebrow">THE ART OF GETTING READY</span>

            <h2>
              Your look.
              <br />
              <em>Your moment.</em>
            </h2>

            <p>
              Every occasion begins with a vision. Browse Lauren&apos;s
              published makeup work to discover her style, then
              contact her to discuss the look you have in mind.
            </p>

            <a href={MAILTO} className="button button-dark">
              DISCUSS YOUR OCCASION <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}

      <section className="portfolio section-pad" id="portfolio">
        <div className="section-top">
          <span>03 / THE PORTFOLIO</span>
          <span>EXPLORE THE WORK</span>
        </div>

        <div className="portfolio-heading">
          <span className="eyebrow">A CLOSER LOOK</span>

          <h2>
            The beauty
            <br />
            <em>diary.</em>
          </h2>

          <p>
            Explore Lauren&apos;s actual makeup work through her official
            Instagram portfolio.
          </p>
        </div>

        <div className="portfolio-grid">
          {[
            {
              number: "01",
              title: "The Look",
              className: "portfolio-one",
              caption: "DISCOVER HER ARTISTRY",
            },
            {
              number: "02",
              title: "The Detail",
              className: "portfolio-two",
              caption: "EXPLORE INSPIRATION",
            },
            {
              number: "03",
              title: "The Moment",
              className: "portfolio-three",
              caption: "VIEW HER PORTFOLIO",
            },
          ].map((item) => (
            <a
              key={item.number}
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className={`portfolio-card ${item.className}`}
            >
              <div className="portfolio-card-top">
                <span>{item.number} / THE BEAUTY EDIT</span>
                <span>↗</span>
              </div>

              <div className="portfolio-orb">
                <span>✳</span>
              </div>

              <div className="portfolio-card-bottom">
                <h3>{item.title}</h3>
                <span>{item.caption}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="portfolio-footer">
          <span>REAL MAKEUP PHOTOGRAPHS AVAILABLE ON INSTAGRAM</span>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            VIEW LAUREN&apos;S WORK <Arrow />
          </a>
        </div>
      </section>

      {/* STATEMENT */}

      <section className="statement">
        <span>LAUREN B MAKEUP ARTISTRY ✳</span>

        <h2>
          A moment
          <br />
          <em>to remember.</em>
        </h2>

        <b>✳</b>
      </section>

      {/* CONTACT */}

      <section className="contact section-pad" id="contact">
        <div className="section-top">
          <span>04 / ENQUIRIES</span>
          <span>LET&apos;S CONNECT</span>
        </div>

        <div className="contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">HAVE AN OCCASION IN MIND?</span>

            <h2>
              Let&apos;s talk
              <br />
              <em>beauty.</em>
            </h2>

            <p>
              Planning an occasion or exploring makeup options?
              Contact Lauren directly with your preferred date,
              location and the look you&apos;re considering.
              Availability and arrangements are confirmed
              directly with the artist.
            </p>

            <a href={MAILTO} className="button button-dark">
              EMAIL LAUREN <Arrow />
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="underlined instagram-contact"
            >
              CONNECT ON INSTAGRAM <Arrow />
            </a>

            <span className="contact-email">{EMAIL}</span>
          </div>

          <div className="contact-art">
            <div className="contact-ring ring-one" />
            <div className="contact-ring ring-two" />

            <div className="contact-word">
              <span>your beauty</span>
              <strong>moment.</strong>
              <em>✳</em>
            </div>

            <small>LAUREN B. / MAKEUP ARTISTRY</small>
          </div>
        </div>
      </section>

      {/* LOCATION */}

      <section className="location section-pad">
        <div className="section-top">
          <span>BASED IN</span>
          <span>PENNSYLVANIA</span>
        </div>

        <div className="location-grid">
          <div>
            <span className="eyebrow">LAUREN B MAKEUP ARTISTRY</span>

            <h2>
              Central
              <br />
              <em>PA.</em>
            </h2>

            <p>
              Based in the Central Pennsylvania area.
              Contact Lauren directly to confirm appointment
              location and any applicable travel arrangements.
            </p>

            <a href={MAILTO} className="underlined">
              SEND AN ENQUIRY <Arrow />
            </a>
          </div>

          <div className="location-visual">
            <span>PA</span>
            <small>CENTRAL PENNSYLVANIA</small>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-top">
          <span>LAUREN B MAKEUP ARTISTRY</span>
          <span>CENTRAL PENNSYLVANIA ✳</span>
        </div>

        <div className="footer-logo">
          Lauren B<span>✳</span>
          <small>MAKEUP ARTISTRY</small>
        </div>

        <div className="footer-bottom">
          <span>LAUREN B MAKEUP ARTISTRY</span>

          <div>
            <a href={MAILTO}>EMAIL ↗</a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM ↗
            </a>

            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}