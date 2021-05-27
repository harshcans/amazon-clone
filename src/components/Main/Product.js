import Image from 'next/image';
import { useState } from 'react';
import Currency from 'react-currency-formatter';
import ProductRating from './ProductRating';

const Product = ({ id, title, description, category, price, image }) => {
  const getRandomPrime = () => Math.random() < 0.5;

  const [hasPrime] = useState(getRandomPrime());

  return (
    <div>
      <p>{category}</p>
      <Image src={image} height={200} width={200} objectFit='contain' />

      <h4>{title}</h4>

      <ProductRating />

      <p>{description}</p>

      <div>
        <Currency quantity={price} currency='EUR' />
      </div>

      {hasPrime && (
        <div>
          <img src='https://links.papareact.com/fdw' alt='Has prime' />
        </div>
      )}
    </div>
  );
};

export default Product;
