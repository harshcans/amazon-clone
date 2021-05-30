import Image from 'next/image';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/checkout/CheckoutProduct';
import Header from '../components/Header';
import { selectItems } from '../slices/basketSlice';

const Checkout = () => {
  const basketItems = useSelector(selectItems);

  return (
    <div className='bg-gray-100'>
      <Header />

      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* Left section */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src='https://links.papareact.com/ikj'
            height={250}
            width={1020}
            objectFit='contain'
            alt='Advert'
          />

          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b shadow-lg pb-4'>
              {basketItems.length === 0
                ? 'Your Amazon basket is empy'
                : 'Shopping basket'}
            </h1>
            {basketItems.map((item, i) => (
              <CheckoutProduct key={i} item={item} />
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className=''></div>
      </main>
    </div>
  );
};

export default Checkout;
