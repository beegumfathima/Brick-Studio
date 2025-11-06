import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        {/* ======= Meta Data ======= */}
        <title>Contact Brick Studio — Hire a Global Creative Branding & Design Partner</title>
        <meta
          name="description"
          content="Contact Brick Studio — a global creative branding, design, and video studio partnering with brands across the US, UK, EMEA, South Africa, and the Middle East. Let's create something timeless together."
        />
        <meta
          name="keywords"
          content="contact branding agency, hire creative studio, global design agency contact, work with Brick Studio, branding partner US UK EMEA, international design studio"
        />

        {/* ======= Social / Open Graph ======= */}
        <meta property="og:title" content="Work with Brick Studio — Global Creative Design Partner" />
        <meta
          property="og:description"
          content="Partner with Brick Studio for branding, UI/UX, video editing, and post-production — serving clients worldwide."
        />
        <meta property="og:image" content="https://your-domain.com/og-contact.jpg" />
        <meta property="og:url" content="https://brick-studio-nine.vercel.app/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Brick Studio" />

        {/* ======= Twitter Card ======= */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Brick Studio — Global Creative Design Partner" />
        <meta
          name="twitter:description"
          content="Creative branding and design studio serving clients worldwide. Let's build brands that breathe."
        />
        <meta name="twitter:image" content="https://your-domain.com/og-contact.jpg" />

        {/* ======= Structured Data ======= */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Brick Studio",
            "url": "https://brick-studio-nine.vercel.app/contact",
            "description": "Reach out to Brick Studio — a global creative branding and design studio.",
            "publisher": {
              "@type": "Organization",
              "name": "Brick Studio",
              "url": "https://brick-studio-nine.vercel.app"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info.thebrickstudios@gmail.com",
              "contactType": "Customer Service",
              "availableLanguage": ["English"]
            },
            "areaServed": ["US", "UK", "Europe", "Middle East", "South Africa"]
          }
        `}</script>
      </Helmet>

      {/* ======= Invisible SEO Layer ======= */}
      <h1 style={{ position: "absolute", left: "-9999px" }}>
        Contact Brick Studio — Global Branding, Design, and Video Agency
      </h1>
      <p style={{ position: "absolute", left: "-9999px" }}>
        Partner with Brick Studio to craft branding, UI/UX design, visual identity systems, and motion content for your
        brand. We collaborate remotely with global teams across the US, UK, Europe, South Africa, and the Middle East.
        Whether you're building a startup or rebranding a legacy, we help create experiences that feel alive and human.
      </p>
      <p style={{ position: "absolute", left: "-9999px" }}>
        Get in touch at info.thebrickstudios@gmail.com or fill out the contact form to start your next creative project
        with us. Let's build something that breathes.
      </p>

      {/* ======= Your visible contact page stays untouched below ======= */}
      {/* form, visuals, CTA, etc. */}
    </>
  );
}
