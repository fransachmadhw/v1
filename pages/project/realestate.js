import Head from 'next/head';
import PreFooter from '../../components/PreFooter';
import Realestate from '../../components/Realestate';

const realestate = () => {
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
      <Realestate />
      <PreFooter />
    </>
  );
};

export default realestate;
