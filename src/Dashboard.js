import axios from "axios";
import { useEffect, useState } from "react";
import NewProduct from "./NewProduct";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

const Dashboard = () => {
  const [productState, setProductState] = useState([
    { id: 1, name: "iPhone", price: 100 },
    { id: 2, name: "Phonex", price: 200 },
    { id: 3, name: "Nepal", price: 300 },
  ]);

  const[newProductState,setNewProductState]= useState({name:'',price:0});

  const [selectedProduct,setSelectedProduct] = useState(0);

  useEffect(  () => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const result  = await axios.get('http://localhost:8080/products');
    setProductState(result.data);
  }

  const handleSaveProduct = async (event) => {
    const result  = await axios.post('http://localhost:8080/products', newProductState);
    if(result){
        let copy = [...productState];
        copy.push(result.data)
        setProductState(copy);
    }
  }

  const onFieldsChanged = (event) => {
      let copy = {...newProductState};
      copy[event.target.name] = event.target.value;
      setNewProductState(copy);
      console.log(newProductState)
  } 


  const handleProductClick = (id) => {
    console.log('Product click');
      setSelectedProduct(id);
  }

  return (
    <>
      <div> Dashboard</div>
      <div>Product</div>
      <ProductList productList={productState} />
        <NewProduct name={newProductState.name} onFieldsChanged={onFieldsChanged} price={newProductState.name} handleSaveProduct={handleSaveProduct} />
    
      <div>Product Detail
        <ProductDetail id={selectedProduct} /> 
      </div>
    </>
  );
};

export default Dashboard;
