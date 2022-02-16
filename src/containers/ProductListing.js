import React from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios'
import {useEffect} from 'react';
import ProductComponent from './ProductComponent';

const ProductListing =() =>{
    const products= useSelector((state)=>state);

    const fetchProducts = async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products`)
                         .catch((err)=>{
                             console.log("Err",err);
                         })
        console.log(response);
    }
    useEffect(()=>{
        fetchProducts();
    },[]);

    console.log(products);
   
    return(
        <div className="ui grid container">
          <ProductComponent />
        </div>
    )
}
export default ProductListing;