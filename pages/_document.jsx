import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Luxe Digital - Your Complete Digital Ecosystem. Six Specialists. One Vision." />
        <meta name="keywords" content="Digital Marketing, Web Development, Graphic Design, Video Editing, Copywriting, Meta Ads" />
        <meta name="author" content="Luxe Digital" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Luxe Digital - Professional Creative Agency" />
        <meta property="og:description" content="Your complete digital ecosystem with 6 specialized experts" />
        <meta property="og:url" content="https://luxedigital.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxe Digital" />
        <meta name="twitter:description" content="Your complete digital ecosystem" />
        
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%234cafc0' width='100' height='100'/><text x='50' y='75' font-size='60' font-weight='bold' text-anchor='middle' fill='white'>LD</text></svg>" />
      </Head>
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
