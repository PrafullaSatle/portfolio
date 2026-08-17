import { useState } from "react";
import { projects, type Project } from "../data/projects";
import SectionLabel from "./SectionLabel";
import ProjectShowcase from "./ProjectShowcase";

const filters = ["All", "Data Analytics", "AI / ML", "Web Development", "Other"] as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" style={{ padding: "96px 24px", backgroundColor: "#f8f8f6" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Projects</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            color: "#111111",
            margin: "8px 0 16px",
            letterSpacing: "-0.02em",
          }}
        >
          Selected work
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            color: "#6b7280",
            margin: "0 0 40px",
            maxWidth: 560,
            lineHeight: 1.7,
          }}
        >
          Click a project to explore the problem, process, visuals, and results.
        </p>

        <div
          role="tablist"
          aria-label="Filter projects by category"
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 500,
                color: activeFilter === filter ? "#ffffff" : "#6b7280",
                backgroundColor: activeFilter === filter ? "#2a4dd0" : "#f3f4f6",
                border: "none",
                padding: "7px 16px",
                borderRadius: 20,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              color: "#6b7280",
              marginTop: 24,
            }}
          >
            No projects in this category yet.
          </p>
        )}
      </div>

      {selectedProject && (
        <ProjectShowcase
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#ffffff",
        cursor: "pointer",
        transition: "box-shadow 0.2s, transform 0.2s",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open project showcase for ${project.title}`}
    >
      <div
        style={{
          width: "100%",
          height: 200,
          backgroundColor: "#f3f4f6",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s",
            transform: hovered ? "scale(1.03)" : "scale(1)",
          }}
          loading="lazy"
        />
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 500,
            color: "#2a4dd0",
            backgroundColor: "#eef1fd",
            padding: "3px 8px",
            borderRadius: 3,
            letterSpacing: "0.04em",
          }}
        >
          {project.category}
        </span>
      </div>

      <div style={{ padding: "20px 20px 18px" }}>
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            fontWeight: 600,
            color: "#111111",
            margin: "0 0 8px",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            color: "#6b7280",
            margin: "0 0 16px",
            lineHeight: 1.6,
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
          {project.technologies.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "#374151",
                backgroundColor: "#f3f4f6",
                border: "1px solid #e5e7eb",
                padding: "2px 8px",
                borderRadius: 3,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            fontWeight: 500,
            color: hovered ? "#2a4dd0" : "#9ca3af",
            margin: 0,
            transition: "color 0.15s",
          }}
        >
          View project →
        </p>
      </div>
    </article>
  );
}
