import React, { useEffect, useState } from "react";

export default function Debouncing(){
    const [pincode,setPincode] = useState({});
    const [postOffice,setPostOffice] = useState([]);
    const[msg,setMsg] = useState("");

    const fetchData = async() =>{
        
        console.log("calling api..");
        const response = await (await fetch(`https://api.postalpincode.in/pincode/${pincode}`)).json();
        response[0].Status === "Success"
        ? setPostOffice(response[0].PostOffice)
        : setPostOffice([]);
        setMsg(response[0]?.Message)
    }
    console.log(msg);

    // useEffect(()=>{
    //     fetchData();
    // },[pincode])

    useEffect(()=>{
        const debounceFn = setTimeout(()=>{
            fetchData();

        },2000)
        return()=> clearTimeout(debounceFn)

    },[pincode])
    return(
        <>
        <div>
            <h4>Debouncing in Reactjs</h4>
            <input
            placeholder="Enter pincode.."
            onChange={(e)=>setPincode(e.target.value)}
            />
            <h4>
                Post Office Name
            </h4>
            <div>
                <h3 style={{color:"green"}}>{msg}</h3>
             {
                postOffice.map((office, index) => (
                    <p key={`${office.Name}-${index}`}>{office.Name}</p>
                ))
            }

        </div>
           

        </div>
        </>
    )
}