import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";

interface ProjectShowcaseProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectShowcase({ project, onClose }: ProjectShowcaseProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-title-${project.id}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        backgroundColor: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "32px 16px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <article
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 12,
          width: "100%",
          maxWidth: 920,
          boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          margin: "auto",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <header
          style={{
            padding: "28px 32px 24px",
            borderBottom: "1px solid #f3f4f6",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 16,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "#2a4dd0",
                backgroundColor: "#eef1fd",
                padding: "4px 10px",
                borderRadius: 3,
              }}
            >
              {project.category}
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close project showcase"
              style={{
                background: "none",
                border: "1px solid #e5e7eb",
                borderRadius: 6,
                width: 36,
                height: 36,
                cursor: "pointer",
                color: "#6b7280",
                fontSize: 20,
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ×
            </button>
          </div>

          <h2
            id={`project-title-${project.id}`}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 4vw, 36px)",
              fontWeight: 400,
              color: "#111111",
              margin: "0 0 10px",
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              color: "#6b7280",
              margin: "0 0 20px",
              lineHeight: 1.65,
            }}
          >
            {project.context}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "#374151",
                  backgroundColor: "#f3f4f6",
                  border: "1px solid #e5e7eb",
                  padding: "4px 10px",
                  borderRadius: 3,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        <div style={{ padding: "32px" }}>
          <ShowcaseSection title="Problem / Question">
            <p style={bodyTextStyle}>{project.problem}</p>
          </ShowcaseSection>

          {project.data && (
            <ShowcaseSection title="Data">
              <p style={{ ...bodyTextStyle, marginBottom: 12 }}>
                <strong style={{ color: "#374151" }}>Source:</strong>{" "}
                {project.data.source}
              </p>
              <p style={{ ...bodyTextStyle, marginBottom: 12 }}>
                {project.data.description}
              </p>
              {project.data.characteristics && project.data.characteristics.length > 0 && (
                <ul style={listStyle}>
                  {project.data.characteristics.map((item) => (
                    <li key={item} style={listItemStyle}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </ShowcaseSection>
          )}

          <ShowcaseSection title="Approach">
            <ol style={{ ...listStyle, listStyleType: "decimal" }}>
              {project.approach.map((step) => (
                <li key={step} style={listItemStyle}>
                  {step}
                </li>
              ))}
            </ol>
          </ShowcaseSection>

          <ShowcaseSection title="Visual Evidence">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {project.visualEvidence.map((asset, index) => (
                <figure
                  key={`${asset.src}-${index}`}
                  style={{
                    margin: 0,
                    border: "1px solid #e5e7eb",
                    borderRadius: 8,
                    overflow: "hidden",
                    backgroundColor: "#fafafa",
                  }}
                >
                  {asset.type === "video" ? (
                    <video
                      src={asset.src}
                      controls
                      style={{ width: "100%", display: "block", backgroundColor: "#111111" }}
                    >
                      Your browser does not support embedded video.
                    </video>
                  ) : (
                    <img
                      src={asset.src}
                      alt={asset.alt}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  {asset.caption && (
                    <figcaption
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 13,
                        color: "#6b7280",
                        padding: "12px 14px",
                        lineHeight: 1.5,
                        borderTop: "1px solid #f3f4f6",
                      }}
                    >
                      {asset.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </ShowcaseSection>

          <ShowcaseSection title="Key Findings / Results">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
              }}
            >
              {project.findings.map((finding) => (
                <div
                  key={finding}
                  style={{
                    border: "1px solid #c7d2fe",
                    backgroundColor: "#eef1fd",
                    borderRadius: 8,
                    padding: "18px 20px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      color: "#1e3bba",
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {finding}
                  </p>
                </div>
              ))}
            </div>
          </ShowcaseSection>

          <ShowcaseSection title="Conclusion">
            <p style={bodyTextStyle}>{project.conclusion}</p>
          </ShowcaseSection>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              paddingTop: 8,
              borderTop: "1px solid #f3f4f6",
            }}
          >
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 600,
                color: "#ffffff",
                backgroundColor: "#111111",
                padding: "12px 20px",
                borderRadius: 6,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <GitHubIcon />
              View GitHub Repository
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#2a4dd0",
                  backgroundColor: "#eef1fd",
                  padding: "12px 20px",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

function ShowcaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: 36 }}>
      <h3
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: 500,
          color: "#9ca3af",
          textTransform: "uppercase",
          letterSpacing: "0.07em",
          margin: "0 0 14px",
        }}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}

const bodyTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  lineHeight: 1.75,
  color: "#4b5563",
  margin: 0,
};

const listStyle: React.CSSProperties = {
  margin: 0,
  paddingLeft: 20,
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

const listItemStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  color: "#4b5563",
  lineHeight: 1.65,
};

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}
