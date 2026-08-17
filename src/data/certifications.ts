export interface Certification {
  name: string;
  organization: string;
  year: string;
  credentialUrl: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    organization: "AWS Academy",
    year: "2025",
    credentialUrl: "${import.meta.env.BASE_URL}certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20250331-27-imos0y.pdf",
  },
  {
    name: "GenAI	Powered	Data	Analytics	Job	Simulation",
    organization: "Forage (TATA)",
    year: "2026",
    credentialUrl: "${import.meta.env.BASE_URL}certificates/Tata_DA_completion_certificate.pdf",
  },
  {
    name: "Data	Analytics	Job	Simulation",
    organization: "Forage (Deloitte)",
    year: "2026",
    credentialUrl: "${import.meta.env.BASE_URL}certificates/Deloitte_Job_Simulation_completion_certificate.pdf",
  },
  {
    name: "Full Stack Web Development with AI",
    organization: "Internshala Trainings",
    year: "2023",
    credentialUrl: "${import.meta.env.BASE_URL}certificates/Full Stack Web Development with AI Training - Certificate of Completion.pdf",
  },
];
