import Head from 'next/head';
import DreadOut2 from '../../components/DreadOut2';
import PreFooter from '../../components/PreFooter';

const dreadout2 = () => {
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
      <DreadOut2 />
      <PreFooter />
    </>
  );
};

export default dreadout2;
