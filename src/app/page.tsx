import { PortfolioExperience } from "@/components/portfolio-experience";
import { profile, projects, skillGroups } from "@/data/profile";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    url: "https://harsheet-sharma.vercel.app",
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: skillGroups.flatMap((group) => group.skills).slice(0, 24),
    hasCredential: "BCA, RTM Nagpur University",
    workExample: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      url: project.href,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioExperience />
    </>
  );
}
