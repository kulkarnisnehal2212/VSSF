import { useEffect } from "react";

const SITE_URL = "https://vssf.vercel.app";

/**
 * SEO component — updates document title and meta tags per page.
 * Usage: <SEO title="Page Title" description="..." />
 */
export default function SEO({ title, description, image = "/images/og-image.jpg", url }) {
  const fullTitle = title
    ? `${title} | VSS Foundation`
    : "Vidyarthi Sahayyak Samiti Foundation | Empowering Students";

  const fullDescription =
    description ||
    "VSS Foundation (VSSF) is a 501(c)(3) non-profit supporting students from rural India through affordable housing, education, and holistic development programs.";

  // Always use absolute URL for OG image so WhatsApp/LinkedIn can fetch it
  const absoluteImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    const setMeta = (selector, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const attr = selector.includes("[name") ? "name" : "property";
        const key = selector.match(/["']([^"']+)["']/)?.[1];
        if (key) el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', fullDescription);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', fullDescription);
    setMeta('meta[property="og:image"]', absoluteImage);
    setMeta('meta[property="og:image:alt"]', fullTitle);
    if (url) setMeta('meta[property="og:url"]', `${SITE_URL}${url}`);
    setMeta('meta[name="twitter:card"]', "summary_large_image");
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', fullDescription);
    setMeta('meta[name="twitter:image"]', absoluteImage);
  }, [fullTitle, fullDescription, absoluteImage, url]);

  return null;
}
