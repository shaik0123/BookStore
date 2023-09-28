import React, { Children, createContext, useState } from "react";

export const NavbarContext = createContext();
function NavbarContextProvider({children}){
    const [count, setcount] = useState(0);
    const handleremove = () => {
         count===0?setcount(count):setcount(count-1)
    }
    const handleadd = () => {
         setcount(count + 1)
    }
     console.log(count);
    return(
        <div>
            <NavbarContext.Provider value={{handleremove,handleadd,count}} >
                {children}
            </NavbarContext.Provider>
        </div>
    )
}
export default NavbarContextProvider