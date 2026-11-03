export default function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://divyanshusinha.me/#person",
        "name": "Divyanshu Sinha",
        "alternateName": ["Divyanshu", "di0206-innovator"],
        "jobTitle": "AI Product Engineer & Growth Strategist",
        "description": "Multidisciplinary builder at the intersection of AI product engineering, developer community leadership, growth strategy, and voice-first interaction design.",
        "url": "https://divyanshusinha.me",
        "image": "https://divyanshusinha.me/images/profile/divyanshu.jpg",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Ajeenkya DY Patil University (ADYPU)",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          }
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.linkedin.com/in/divyanshu-sinha-46074126b/",
          "https://github.com/di0206-innovator",
          "https://dev.to/divyanshu_sinha_72e579e28"
        ],
        "knowsAbout": [
          "AI Product Engineering",
          "Retrieval-Augmented Generation (RAG)",
          "Local LLMs & WebGPU",
          "Next.js & TypeScript",
          "Deterministic State Machines",
          "Developer Relations & Campus Communities",
          "Smart India Hackathon 2026",
          "Voice-First Computing & Wispr Flow",
          "AgriTech & Mandi Systems",
          "FinTech Payment Recovery (Razorpay)"
        ],
        "worksFor": [
          {
            "@type": "Organization",
            "name": "Google Developer Groups (GDG) on Campus ADYPU",
            "role": "Organizer 2026–27 / Management Lead 2025–26"
          },
          {
            "@type": "Organization",
            "name": "Alta Pune Community Club",
            "role": "President"
          },
          {
            "@type": "Organization",
            "name": "ALTA School of Technology HQ",
            "role": "Student Content Lead"
          },
          {
            "@type": "Organization",
            "name": "FlyRank AI",
            "role": "Founding Growth & DevRel Intern"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://divyanshusinha.me/#website",
        "url": "https://divyanshusinha.me",
        "name": "Divyanshu Sinha — The Builder Behind the Builds",
        "description": "Interactive personal portfolio and engineering dossier created for the Wispr Flow India Hiring Challenge.",
        "author": {
          "@id": "https://divyanshusinha.me/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfilePage",
        "@id": "https://divyanshusinha.me/#webpage",
        "url": "https://divyanshusinha.me",
        "name": "Divyanshu Sinha — Portfolio × Wispr Flow India",
        "isPartOf": {
          "@id": "https://divyanshusinha.me/#website"
        },
        "about": {
          "@id": "https://divyanshusinha.me/#person"
        },
        "primaryImageOfPage": "https://divyanshusinha.me/images/projects/stratify.jpg"
      },
      {
        "@type": "ItemList",
        "name": "Featured Software Builds & Case Studies by Divyanshu Sinha",
        "itemListElement": [
          {
            "@type": "SoftwareApplication",
            "position": 1,
            "name": "NotesGPT",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web",
            "description": "Local offline-capable AI study companion with RAG vector indexing and WebGPU acceleration.",
            "url": "https://github.com/di0206-innovator/Notes-GPT"
          },
          {
            "@type": "SoftwareApplication",
            "position": 2,
            "name": "Stratify",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "The operating system for the startup economy, connecting founders and investors in a living graph.",
            "url": "https://stratify-murex.vercel.app/"
          },
          {
            "@type": "SoftwareApplication",
            "position": 3,
            "name": "KrishiSetu",
            "applicationCategory": "AgriTechApplication",
            "operatingSystem": "Web",
            "description": "Connected AI-powered agricultural operating system addressing Indian mandi auction inefficiencies.",
            "url": "https://krishi-setu-ivory.vercel.app/"
          },
          {
            "@type": "SoftwareApplication",
            "position": 4,
            "name": "Healthify",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "description": "AI-powered consumer food ingredient scanner and FSSAI additive safety evaluator.",
            "url": "https://healthify-lyart.vercel.app/"
          },
          {
            "@type": "SoftwareApplication",
            "position": 5,
            "name": "Climbit Decision Engine",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "description": "Deterministic carbon calculation engine with Zod-enforced AI action routing, built in a 12-hour PromptWars sprint.",
            "url": "https://github.com/di0206-innovator/Climbit"
          },
          {
            "@type": "SoftwareApplication",
            "position": 6,
            "name": "NyaySaathi",
            "applicationCategory": "LegalApplication",
            "operatingSystem": "Web",
            "description": "Sovereign legal AI platform for contract redlining and pre-litigation dossiers grounded in BNS and CPA 2019.",
            "url": "https://nyaysaathi-6qcz.vercel.app/"
          },
          {
            "@type": "SoftwareApplication",
            "position": 7,
            "name": "MerchantPulse",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web",
            "description": "Autonomous payment recovery engine for Razorpay merchants utilizing deterministic failure state machines.",
            "url": "https://merchantpulse-psi.vercel.app/"
          },
          {
            "@type": "SoftwareApplication",
            "position": 8,
            "name": "Forge Goa",
            "applicationCategory": "CommunityApplication",
            "operatingSystem": "Web",
            "description": "Builder identity and squad dynamics platform designed for HackerHouse Goa 2026.",
            "url": "https://hhgoa26-eta.vercel.app/"
          },
          {
            "@type": "SoftwareApplication",
            "position": 9,
            "name": "Brainworks",
            "applicationCategory": "SafetyApplication",
            "operatingSystem": "Embedded / Web",
            "description": "Edge AI and radar-based vehicle situational awareness system for zero-visibility open-cast mines (SIH 2026).",
            "url": "https://github.com/manasir747/Brainworks"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "name": "Frequently Asked Questions about Divyanshu Sinha",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is Divyanshu Sinha?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Divyanshu Sinha is a multidisciplinary software builder and growth strategist based in Pune, India. He studies B.Tech AI & Data Science at Ajeenkya DY Patil University (ADYPU) and serves as the Organizer of GDG on Campus ADYPU, President of Alta Pune Community Club, and Student Content Lead for ALTA School of Technology HQ."
            }
          },
          {
            "@type": "Question",
            "name": "What did Divyanshu Sinha build for the Wispr Flow India Hiring Challenge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Divyanshu designed and engineered an interactive neo-brutalist portfolio experience demonstrating 9 production and prototype builds, 7 published field notes, an interactive system X-Ray, and a comprehensive Wispr Flow adoption flywheel and campaign blueprint tailored for the Indian developer ecosystem."
            }
          },
          {
            "@type": "Question",
            "name": "What was Divyanshu's role in the Smart India Hackathon (SIH) 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In SIH 2026 (Problem Statement SIH26007: low-visibility haulage safety in open-cast mines), Divyanshu co-engineered the Brainworks radar telemetry and Edge TinyML system with Sahil Mane while co-leading internal hackathon operations for 27 teams, securing 2nd place overall."
            }
          },
          {
            "@type": "Question",
            "name": "What is NotesGPT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NotesGPT is an offline-capable academic research workstation built by Divyanshu Sinha using Next.js 16, local LLMs via Ollama and WebLLM (WebGPU), and vector retrieval-augmented generation (RAG) to generate complete study kits in under 15 seconds without cloud reliance."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}

