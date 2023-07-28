import '@fontsource/jost';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { PropagateLoader } from 'react-spinners';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      setIsLoading(true);
    });

    Router.events.on('routeChangeComplete', (url) => {
      setIsLoading(false);
    });

    Router.events.on('routeChangeError', (url) => {
      setIsLoading(false);
    });
  }, [Router]);
  return (
    <Layout>
      {isLoading && (
        <div className="w-full h-screen absolute top-0 left-0 bg-[rgba(0,0,0,.8)] flex justify-center items-center z-[99]">
          <PropagateLoader
            color="#a3a3a3"
            loading={true}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
