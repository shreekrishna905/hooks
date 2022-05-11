import Product from "./Product";


const ProductList = (props) => {

  return props.productList.map((item) => {
    return (
      <Product
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
      />
    );
  });
};

export default ProductList;
