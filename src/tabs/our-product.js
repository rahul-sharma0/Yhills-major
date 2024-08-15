import {useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Ourproducts(){
  
    const [products, setProducts]=useState([]);
  const navigate= useNavigate();
  
  useEffect(()=>{

    fetchProducts();
   
},[])

const fetchProducts=()=>{
    axios.get('http://localhost:5000/products')

    .then(response =>{
      setProducts(response.data);
    })

    .catch(error =>{
      console.error('There was an error in fetching the product data',error)
    })
  }

  const handleDelete = (id)=> {
    axios.delete(`http://localhost:5000/products/${id}`)

    .then(response =>{
      fetchProducts();
    })

    .catch(error =>{
      console.error('There was an error in deleting the product data',error)
    })
  }

    return(
        <>
        <h1 className="header">Our Menu</h1>

        <div className="container mt-4">
        
        <div className="row">
          
          { products.map(product => (
            
              <div className="col-md-4" key={product.id}>
               
                <div className="card mb-4">
                  
                <img src={product.image} height={300} className="card-img-top" />
                
                <div className="card-body">
                  
                  <h3 className="card-title">{product.name}</h3>
                  <h5 className="card-text">Price: ₹{product.price}</h5>
                  <h6 className="card-text">Size: {product.size}</h6>
                  <h6 className="card-text">Category: {product.category}</h6>
                  <h6 className="card-text">Ingredients: {product.ingredients}</h6>

                 
                  <button className="btn btn-danger me-2" onClick={()=> handleDelete(product.id)}>Delete</button> 
                  <button className="btn btn-warning" onClick={() => navigate(`/update-product/${product.id}`)}>Update</button> 
                  </div>
                </div>
                </div>
            
                
            ))
          }
        </div>
     </div>

        </>
    )
}
export default Ourproducts;