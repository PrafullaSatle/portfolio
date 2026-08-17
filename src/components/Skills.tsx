import { skillGroups } from "../data/skills";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "96px 24px", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Skills</SectionLabel>
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
          Technical toolkit
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: "28px 28px 24px",
                backgroundColor: "#fafafa",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#9ca3af",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  margin: "0 0 6px",
                }}
              >
                {group.category}
              </p>
              <div
                style={{
                  width: 32,
                  height: 2,
                  backgroundColor: "#2a4dd0",
                  marginBottom: 20,
                }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.skills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "#374151",
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        padding: "5px 12px",
        borderRadius: 4,
        lineHeight: 1,
      }}
    >
      {children}
    </span>
  );
}
