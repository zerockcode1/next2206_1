import React from 'react';
import {useRouter} from "next/router";
import {getPostOneAjax} from "../api/postAPI";
import useSWR from "swr";
import Link from "next/link";

const fetcher = ({id}) => getPostOneAjax(id)

const PostRead = () => {

    const router = useRouter()

    const {pid} = router.query

    const {data, error} = useSWR({id:pid}, fetcher)

    console.log("id", pid)

    if (!data) return <div>loading...</div>

    const {id,title,author} = data

    return (
        <div>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h1>{author}</h1>

            <button><Link href={{pathname:`/posts/list`}}><a>List</a></Link></button>

        </div>
    );
};

export default PostRead;