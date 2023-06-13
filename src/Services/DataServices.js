import axios from "axios"

export const getPostData=async (dataDispatch)=>{
try {
    const {status,data:{posts}}=await axios.get("/api/posts")
    if(status===200 || status===201){
        // console.log(posts)
        dataDispatch({type:"ALL_POST_DATA",payload:posts})
    }
} catch (error) {
    console.log(error)
}

}