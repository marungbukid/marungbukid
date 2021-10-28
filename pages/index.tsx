import type { NextPage } from 'next';
import Head from 'next/head';
import BriefProfile from '../components/contents/brief-profile';
import BuiltByMe from '../components/contents/built-by-me';
import FloatingColorToggle from '../components/floating-color-toggle';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jan Maru De Guzman | Portfolio</title>
        <meta name='description' content="Jan Maru De Guzman's Portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FloatingColorToggle />

      <BriefProfile />

      <BuiltByMe />
    </div>
  );
};

export default Home;
