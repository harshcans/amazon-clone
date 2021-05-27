import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import ProductFeed from '../components/Main/ProductFeed';

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0 by marcusoftnet</title>
      </Head>

      <Header />

      <Main />

      <ProductFeed products={products} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
};
