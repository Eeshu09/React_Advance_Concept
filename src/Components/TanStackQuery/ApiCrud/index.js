import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import './Product.css'
import { useNavigate } from 'react-router-dom';

const Product=()=>{
    // const[Data,setData]=useState([]);

     const getData=async()=>{
        const response=await    fetch('https://fakestoreapi.com/products')
        const data=response.json();
        return data;

     }
     const navigate=useNavigate();
    const {isLoading,error,data:Data}=useQuery({queryKey:["products"],queryFn:getData,
        // staleTime:10000
    })

   if(isLoading){
    return <h3>Loading..</h3>
   } 
   if(error){
    return <h1>Error</h1>
   }

  
//  useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(result=>setData(result));
//  },[])
//  const getItemQuantity=(itemId)=>{
//   const cartItem=cart.find((item)=>item.id===itemId)
//   return cartItem?cartItem.quantity:0
//  }

  return(
    <>
    
   { Data && Data.map(item=>(
    <>
    <div className="card">
    <img src={item.image} className="card_img" alt="image" onClick={()=>navigate(`/productDetails/${item.id}`)} style={{cursor:'pointer'}}/>
  <div className="card-body">
    <p>price :<span>₹</span>{ item.price}</p>
    <p>rating : {item.rating.rate}</p>
    
    
    {/* {getItemQuantity(item.id) === 0 ? (
              <button className="addbutton" onClick={() => dispatch(addTocart(item))}>
                Add to Cart
              </button>
            ) : (
              <button className='mainbutton' >
                <button className='sub'onClick={()=>dispatch(remTocart(item.id))} >-</button>
                <span>{getItemQuantity(item.id)}</span>
                <button onClick={() =>dispatch(addTocart(item))} className='addb'>+</button>
              </button>
            )} */}
   
  {/* <button className='addbutton'onClick={()=>dispatch(addTocart(item))}>Add to Cart</button> */}
  </div>
</div>
    </>
   ))}

    </>
  )

    
}
export default Product;