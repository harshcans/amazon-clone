import Image from 'next/image';
import Header from '../components/Header';

const Checkout = () => {
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
              Shopping basket
            </h1>
          </div>
        </div>

        {/* Right section */}
        <div className=''></div>
      </main>
    </div>
  );
};

export default Checkout;
