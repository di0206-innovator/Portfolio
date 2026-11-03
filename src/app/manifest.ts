import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Divyanshu Sinha — The Builder Behind the Builds",
    short_name: "Divyanshu Sinha",
    description: "Personal portfolio, engineering case studies, and Wispr Flow hiring dossier for Divyanshu Sinha.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F7F2",
    theme_color: "#1434FF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

