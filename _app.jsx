import '../styles/globals.css';
import { useEffect, useState } from 'react';
import CustomCursor from '@/components/CustomCursor';

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
