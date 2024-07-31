import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <>
    <Link to={`/post/${$id}`}>
    <div className="w-[300px] rounded-md ">
      <img
        src={appwriteService.getFilePreview(featuredImage)}
        alt={title}
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
       </div>
    </div>
    </Link>
    </>
  )
}


export default PostCard