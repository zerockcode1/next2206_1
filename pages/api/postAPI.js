import axios from "axios";


export const getPostListAjax = async () => {

    const res = await axios.get("http://localhost/posts")

    return res.data
}


export const getPostOneAjax = async (id) => {

    const res = await axios.get(`http://localhost/posts/${id}`)

    return res.data
}
