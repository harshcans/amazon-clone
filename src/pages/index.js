import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0 by marcusoftnet</title>
      </Head>

      <Header />

      <Main />
    </div>
  );
}
