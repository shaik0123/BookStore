import React, { Children, createContext, useContext, useState } from "react";
import './BookQuantity.css'
import { IconButton } from "@mui/material";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { NavbarContext } from "../context/NavbarContext";


function BookQuantity() {
    const {handleremove,handleadd,count}=useContext(NavbarContext);
    return (
        <div className="bookquantity">
            <div>
                <IconButton onClick={handleremove}>
                    <RemoveOutlinedIcon />
                </IconButton>
            </div>
            <div>
                {count}
            </div>
            <div>
                <IconButton onClick={handleadd}>
                    <AddOutlinedIcon />
                </IconButton>

            </div>
        </div>
    )
}
export default BookQuantity