import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
function ProductDetails(){
    const[responseData,setResponseData]=useState(null)
    const[apiData,setApiData]=useState({
        userId:'',
        title:"",
        body:""
    })
    const handleChange=(e)=>{
        setApiData({...apiData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        mutation.mutate(apiData)
    }
    const mutation=useMutation({
        mutationFn:(newTodo)=>{
            return axios.post('https://jsonplaceholder.typicode.com/posts',newTodo)
        },
        onSuccess:(data)=>{
            setResponseData(data.data);
        },
        onError:(error)=>{
            setResponseData(error)

        }
    })
    const param=useParams();
    const {id}=param
    console.log(id)

    const ProductDetails=async()=>{
        const response=await    fetch(`https://fakestoreapi.com/products/${id}`)
        const data=response.json();
        return data;
    }
    console.log(responseData)
    const{isLoading,error,data:Product}=useQuery({queryKey:["productDetails",id],queryFn:ProductDetails})
    return (
        <>
       <h1>{ Product && Product.price}</h1>
       <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter Number" name="userId"onChange={handleChange}/>
        <input type="text" placeholder="Enter title" name="title"onChange={handleChange}/>
        <input type="text" placeholder="Enter body"name="body"onChange={handleChange}/>
        <button >Post</button>


       </form>

        </>
    )
}
export default ProductDetails;