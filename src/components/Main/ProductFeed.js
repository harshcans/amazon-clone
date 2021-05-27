import Product from './Product';

const ProductFeed = ({ products }) => {
  return (
    <div>
      {products.map((p) => (
        <Product key={p.id} {...p} />
      ))}
    </div>
  );
};

export default ProductFeed;
