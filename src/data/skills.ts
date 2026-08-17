export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Data & Analytics",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Excel",
      "Power BI",
      "Tableau",
    ],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Machine Learning",
    skills: ["Scikit-learn"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Jupyter", "VS Code", "AWS"],
  },
];
