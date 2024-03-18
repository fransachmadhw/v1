import Head from 'next/head';
import ReactDashboard from '../../components/ReactDashboard';
import PreFooter from '../../components/PreFooter';

const reactdashboard = () => {
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
      <ReactDashboard />
      <PreFooter />
    </>
  );
};

export default reactdashboard;
