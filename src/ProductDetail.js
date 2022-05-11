import axios from "axios"
import { useEffect, useState } from "react"

const ProductDetail = (props) => {

    const[state,setState] = useState({name:"",price:"", rating:""})
    

    const fetchProductById = async (id) => {
        let result = await axios.get(`http://localhost:8080/products/${id}`)
        setState({...result.data});
    }

    useEffect(()=> {
        fetchProductById(props.id);
    },[props.id])

    return(<div>
        Prodcut Name: {state.name} <br />
        Product Price: {state.price} <br />
        Product Rating: {state.rating}
    </div>)
}

export default ProductDetail;