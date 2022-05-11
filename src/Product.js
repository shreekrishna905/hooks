const Product = (props) => {
  return (
    <div onClick={() => props.productClick(props.id)}>
      <h1>{props.name}</h1>
      <h5>{props.price}</h5>
    </div>
  );
};

export default Product;
