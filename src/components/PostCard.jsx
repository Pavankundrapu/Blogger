import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block hover:shadow-lg transition duration-300">
      <div className="w-full h-full rounded-lg overflow-hidden bg-white shadow-md">
        <div className="relative h-[200px]">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'
            }}
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 line-clamp-2 hover:text-blue-600 transition duration-300">
            {title}
          </h2>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-sm text-gray-500">
              ID: {$id.substring(0, 8)}...
            </span>
            <span className="text-sm font-semibold text-blue-500 hover:underline">
              Read More
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard