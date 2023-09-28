import React, { createContext, useState } from "react";

export const BookContext = createContext();

function BookContextProvider({children}){
    const [bookContext,setbookContext]=useState(null);
    console.log(bookContext)
    return(
        <div>
            <BookContext.Provider value={{bookContext,setbookContext}}>
                {children}
            </BookContext.Provider>

        </div>
    )
}
export default BookContextProvider