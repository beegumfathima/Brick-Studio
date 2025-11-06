import { Helmet } from "react-helmet-async";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        {/* ======= Meta Data ======= */}
        <title>Branding, Design & Video Services — Brick Studio</title>
        <meta
          name="description"
          content="Discover Brick Studio’s global creative services — brand identity, UI/UX design, video editing, and post-production for brands across the US, UK, EMEA, and the Middle East."
        />
        <meta
          name="keywords"
          content="branding services, UI/UX design, video editing, post-production, global design studio, creative agency, brand identity design, motion graphics, digital design"
        />

        {/* ======= Social / OG ======= */}
        <meta property="og:title" content="Brick Studio Services — Branding, Design & Motion" />
        <meta property="og:description" content="Creative branding, UI/UX, and motion design services for global brands." />
        <meta property="og:image" content="https://your-domain.com/og-services.jpg" />
        <meta property="og:url" content="https://brick-studio-nine.vercel.app/services" />

        {/* ======= Structured Data ======= */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Branding, Design & Video Production",
            "provider": {
              "@type": "Organization",
              "name": "Brick Studio",
              "url": "https://brick-studio-nine.vercel.app"
            },
            "areaServed": ["US","UK","Europe","Middle East","South Africa"],
            "description": "Global creative services including brand identity design, UI/UX, video editing, and post-production."
          }
        `}</script>
      </Helmet>

      {/* ======= Invisible SEO Text ======= */}
      <h1 style={{ position: "absolute", left: "-9999px" }}>
        Branding, Design, and Video Services for Global Brands
      </h1>
      <p style={{ position: "absolute", left: "-9999px" }}>
        Brick Studio provides branding, UI/UX, graphic design, web design, video editing, and post-production services.
        We collaborate with global clients across industries to craft expressive, human-centered design systems and
        moving visual narratives.
      </p>

      {/* Your current Services page layout stays untouched */}
    </>
  );
}
