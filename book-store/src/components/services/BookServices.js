import React from "react";
import axios from "axios";

function Authentication(){
    return{
        headers:{"x-access-token":localStorage.getItem("AccessToken")}
}
}
export const getAllBooks =async(Object)=>{
    let response = await axios.get(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book"
    )
    //console.log("response data"+response);
    return response;
}

export const getCartItems = async()=>{
    let response = await axios.get(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items",
        Authentication()
    )
    //console.log(response);
    return response
}