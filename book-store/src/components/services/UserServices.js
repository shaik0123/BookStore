import axios from "axios"

export const signUp = async(Object)=>{
    let response = await axios.post(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",
        Object
    )
    return response
}

export const signIn = async(Object)=>{
    let response = await axios.post(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/login",
        Object
    )
    return response
}