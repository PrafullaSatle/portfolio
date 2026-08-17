import { certifications } from "../data/certifications";
import SectionLabel from "./SectionLabel";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "96px 24px", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Certifications</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            color: "#111111",
            margin: "8px 0 48px",
            letterSpacing: "-0.02em",
          }}
        >
          Credentials
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {certifications.map((cert) => (
            <div
              key={`${cert.name}-${cert.year}`}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: "20px 22px",
                backgroundColor: "#fafafa",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#9ca3af",
                  margin: 0,
                }}
              >
                {cert.year}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#111111",
                  margin: "4px 0 2px",
                  lineHeight: 1.4,
                }}
              >
                {cert.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  color: "#6b7280",
                  margin: "0 0 12px",
                }}
              >
                {cert.organization}
              </p>
              <a
                href={cert.credentialUrl}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#2a4dd0",
                  textDecoration: "none",
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                View credential ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
