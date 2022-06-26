import React from 'react';
import useSWR from 'swr'
import axios from "axios";
import {getPostListAjax} from "../api/postAPI";
import Link from "next/link";

const fetcher =  () => getPostListAjax()

const List = () => {

    const {data, error} = useSWR({},fetcher)

    console.log(data, error)

    if (!data) return <div>loading...</div>


    return (
        <div>
          <h1>Post List</h1>

          <ul>
              {data.map(post => <li key={post.id}> <Link href={{pathname:`/posts/${post.id}`}}><a>{post.title}</a></Link> </li>)}
          </ul>


        </div>
    );
};

export default List;