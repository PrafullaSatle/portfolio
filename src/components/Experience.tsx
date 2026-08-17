import { experiences } from "../data/experience";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "96px 24px", backgroundColor: "#f8f8f6" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Experience</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            color: "#111111",
            margin: "8px 0 56px",
            letterSpacing: "-0.02em",
          }}
        >
          Work &amp; learning
        </h2>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 1,
              backgroundColor: "#e5e7eb",
              marginLeft: 7,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {experiences.map((entry) => (
              <div key={`${entry.title}-${entry.duration}`} style={{ paddingLeft: 36, position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 4,
                    width: 15,
                    height: 15,
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    border: "2px solid #2a4dd0",
                  }}
                />

                <div
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 8,
                    padding: "24px 28px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 8,
                      marginBottom: 12,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 17,
                          fontWeight: 600,
                          color: "#111111",
                          margin: "0 0 4px",
                        }}
                      >
                        {entry.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 14,
                          color: "#6b7280",
                          margin: 0,
                        }}
                      >
                        {entry.organization}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        color: "#9ca3af",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {entry.duration}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      color: "#4b5563",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
