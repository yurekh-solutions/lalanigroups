import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  structuredData?: object | object[];
  pageType?: 'home' | 'about' | 'projects' | 'contact' | 'project-detail' | 'buyers-guide' | 'media';
  city?: string;
  region?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

const SEO = ({
  title,
  description,
  keywords = "Lalani Group, Mumbai real estate, property developers Mumbai, flats for sale Mumbai, 1BHK 2BHK 3BHK apartments Mumbai, buy flat Mumbai, property investment Mumbai",
  canonicalUrl,
  ogImage = "https://lalanigroup.in/logo.png",
  ogType = "website",
  noIndex = false,
  structuredData,
  city = "Mumbai",
  region = "Maharashtra",
  publishedDate,
  modifiedDate,
}: SEOProps) => {
  const siteUrl = "https://lalanigroup.in";
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const today = new Date().toISOString();

  const schemaList = Array.isArray(structuredData)
    ? structuredData
    : structuredData
    ? [structuredData]
    : [];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Lalani Group" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />
      
      {/* Geo Tags - Mumbai */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content={`${city}, ${region}, India`} />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      <link rel="alternate" hrefLang="en-in" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Lalani Group" />
      <meta property="og:locale" content="en_IN" />
      {publishedDate && <meta property="article:published_time" content={publishedDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate || today} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lalanigroup" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data - multiple schemas supported */}
      {schemaList.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
