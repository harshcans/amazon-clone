import Image from 'next/image';
import { useState } from 'react';
import Currency from 'react-currency-formatter';
import ProductRating from './ProductRating';

const Product = ({ id, title, description, category, price, image }) => {
  const getRandomPrime = () => Math.random() < 0.5;

  const [hasPrime] = useState(getRandomPrime());

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit='contain' />

      <h4 className='my-3'>{title}</h4>

      <ProductRating />

      <p className='text-xs my-2 line-clamp-2'>{description}</p>

      <div className='mb-5'>
        <Currency quantity={price} currency='EUR' />
      </div>

      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img
            className='w-12'
            src='https://links.papareact.com/fdw'
            alt='Has prime'
          />
          <p className='text-xs text-gray-500'>FREE Next-day delivery</p>
        </div>
      )}

      <button className='mt-auto button'>Add to basket</button>
    </div>
  );
};

export default Product;
