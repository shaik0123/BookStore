import React, { Children, createContext, useContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({children}){
    const [cartData,setCartData]=useState([]);
     const [toggle,settoggle]=useState(false);
     console.log("toggle"+toggle);
    function CartData(obj){
        setCartData(obj)
    }
    console.log("from cart cntx after"+cartData);
    
    return(
        <div>
            <CartContext.Provider value={{toggle,settoggle,setCartData,CartData,cartData}}>
                {children}
            </CartContext.Provider>
        </div>
    )
}
export default CartContextProvider