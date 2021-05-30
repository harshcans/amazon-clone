import Image from 'next/image';
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
      </div>
    </div>
  );
};

export default CheckoutProduct;
