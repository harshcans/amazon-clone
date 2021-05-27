const ProductFeed = ({ products }) => {
  return (
    <div>
      {products.map(({ id, title, description, category, image }) => (
        <p>{p.title}</p>
      ))}
    </div>
  );
};

export default ProductFeed;
