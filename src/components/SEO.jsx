import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Quadminds Technologies", 
  description = "Quadminds Technologies crafts intelligent, scalable digital products that solve real problems — starting with India's student community.",
  path = "",
  keywords = "Quadminds Technologies, BookAdda, tech startup, software development, student marketplace"
}) {
  const siteUrl = "https://quadmindstechnologies.in";
  const fullUrl = `${siteUrl}${path}`;
  const ogImage = `${siteUrl}/logo.png`; // Fallback to logo if no specific image

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Quadminds Technologies" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
