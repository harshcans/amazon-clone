import Image from 'next/image';
import Currency from 'react-currency-formatter';
import ProductRating from '../Main/ProductRating';

const CheckoutProduct = ({ item }) => {
  return (
    <div className='grid grid-cols-5'>
      <Image src={item.image} height={200} width={200} objectFit='contain' />

      <div className='col-span-3 mx-5'>
        <p>{item.title}</p>
        <div>
          <ProductRating rating={item.rating} MAX_RATING={5} />
        </div>
        <p className='text-xs my-2 line-clamp-3'>{item.description}</p>
      </div>

      <div className='col-span-1 mx-5 flex flex-col items-center'>
        <Currency quantity={item.price} currency='EUR' />

        {item.hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              src='https://links.papareact.com/fdw'
              className='w-12'
              alt='Has prime'
              loading='lazy'
            />
            <div className='text-xs text-gray-500'>FREE Next-day delivery</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
