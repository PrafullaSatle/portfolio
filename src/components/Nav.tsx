import { useState, useEffect } from "react";
import { site } from "../data/site";

const links = ["Projects", "Skills", "Experience", "Certifications"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(248, 248, 246,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent",
        transition: "all 0.2s ease",
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            fontWeight: 400,
            color: "#111111",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {site.name}
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
          {links.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => scrollTo(link)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                color: "#4b5563",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#2a4dd0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#4b5563";
              }}
            >
              {link}
            </button>
          ))}
          <a
            href={site.resumeUrl}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "#2a4dd0",
              padding: "8px 20px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1e3bba";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2a4dd0";
            }}
          >
            View Resume
          </a>
        </div>

        <button
          className="show-mobile"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" fill="none" stroke="#111111" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid #e5e7eb",
            padding: "16px 24px 24px",
          }}
        >
          {links.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => scrollTo(link)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                fontWeight: 500,
                color: "#111111",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px 0",
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              {link}
            </button>
          ))}
          <a
            href={site.resumeUrl}
            style={{
              display: "block",
              marginTop: 16,
              width: "100%",
              textAlign: "center",
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "#2a4dd0",
              padding: "10px 0",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            View Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
