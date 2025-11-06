import { Helmet } from "react-helmet-async";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        {/* ======= Meta Data ======= */}
        <title>About Brick Studio — A Global Creative Space for Brands</title>
        <meta
          name="description"
          content="Brick Studio is a creative branding and design studio crafting soulful identities and digital experiences for brands across the US, UK, EMEA, South Africa, and the Middle East."
        />
        <meta
          name="keywords"
          content="global branding studio, creative design agency, about Brick Studio, art-driven design, brand storytelling, UI/UX design studio, global creative partner"
        />

        {/* ======= Social / OG ======= */}
        <meta property="og:title" content="About Brick Studio — Global Creative Design Studio" />
        <meta property="og:description" content="We blend art, architecture, and technology to build brands that breathe across borders." />
        <meta property="og:image" content="https://brick-studio-ll5ewtnju-fathima-beegums-projects.vercel.app/og-about.jpg" />
        <meta property="og:url" content="https://brick-studio-ll5ewtnju-fathima-beegums-projects.vercel.app/about" />

        {/* ======= Structured Data ======= */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Brick Studio",
            "url": "https://brick-studio-ll5ewtnju-fathima-beegums-projects.vercel.app/about",
            "description": "Creative branding and design studio serving global clients with soulful, human-centered design.",
            "publisher": {
              "@type": "Organization",
              "name": "Brick Studio",
              "url": "https://brick-studio-ll5ewtnju-fathima-beegums-projects.vercel.app"
            },
            "areaServed": ["US","UK","Europe","Middle East","South Africa"]
          }
        `}</script>
      </Helmet>

      {/* ======= Invisible SEO Text ======= */}
      <h1 style={{ position: "absolute", left: "-9999px" }}>
        About Brick Studio — Global Branding, Design & Motion Studio
      </h1>
      <p style={{ position: "absolute", left: "-9999px" }}>
        Brick Studio is a creative space where design meets art and technology. We partner with brands worldwide to craft
        strategies, identities, and experiences that connect on an emotional and visual level.
      </p>

      {/* Your existing About page visuals remain unchanged */}
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Brick Studio</h1>
          <p className="text-lg">Coming soon...</p>
        </div>
      </div>
    </>
  );
}
