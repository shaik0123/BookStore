import React, { useContext, useEffect, useState } from "react";
import './Dashboard.css'
import Cards from "../book_components/Card";
import { getAllBooks } from "../services/BookServices";
import { BookContext } from "../context/BookContext";
import BookDetails from "../book_components/BookDetails";
import { CartContext } from "../context/CartContext";
import Cart from "../book_components/Cart";

function Dashboard() {
    const [bookData, setbookData] = useState([]);
    const [selectedData, setselectedData] = useState();
    const [control, setcontrol] = useState(true);
    const { bookContext } = useContext(BookContext);
    const { toggle } = useContext(CartContext)

    const [cartBookDetails, setcartBookDetails] = useState([]);
    function CartBookDetails() {
        setcartBookDetails([...cartBookDetails, bookContext])
        console.log(cartBookDetails);
    }
    function CartBook() {
        return (
            <div>

            </div>
        )
    }

    function SelectedData(getselectdata) {
        // console.log(getselectdata);
        setselectedData(getselectdata)
        console.log(selectedData);
    }

    async function ResponseData() {
        let response = await getAllBooks();
        console.log(response)
        let newData = (response.data.result)
        setbookData(newData)
    }
    useEffect(() => {
        ResponseData()
    }, [])
    function Control() {
        setcontrol(!control)
        setselectedData(null)
    }
    function BookData() {
        return (
            <>
                {
                    bookData.map((data) => (
                        //console.log(data)
                        <Cards key={data._id} data={data} SelectedData={SelectedData} />
                    ))
                }
            </>
        )
    }
    return (
        <div className="mainbookdashboard">
            {toggle ? <Cart Control={Control} /> :

                (
                    control ?
                        (
                            selectedData ? <BookDetails selectedData={selectedData} Control={Control} CartBookDetails={CartBookDetails} bookContext={bookContext} /> : BookData()

                        )
                        : " "
                )

            }
        </div>
    )
}
export default Dashboard