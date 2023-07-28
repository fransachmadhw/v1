import Head from 'next/head';
import About from '../components/About';
import PreFooter from '../components/PreFooter';

const about = () => {
  return (
    <>
      <Head>
        <title>Frans | Front End Developer</title>
        <meta
          name="description"
          content="Frans is a front end developer who specializes in building digital products powered with popular technologies."
        />
        <link rel="icon" type="image/svg+xml" href="/face.svg" />
      </Head>
      <About />
      <PreFooter />
    </>
  );
};

export default about;
