import React, { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Post } from '../types';
interface PostCardProps {
  post: Post;
}
export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-4">
      {/* Header */}
      <div className="flex items-center gap-3 p-4">
        <img
          src={post.user.avatar}
          alt={post.user.name}
          className="w-10 h-10 rounded-full object-cover" />
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{post.user.name}</h4>
          <p className="text-xs text-gray-500">{post.timestamp}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-700">{post.content}</p>
      </div>

      {/* Image */}
      {post.image &&
      <div className="w-full h-64 bg-gray-100">
          <img
          src={post.image}
          alt="Post"
          className="w-full h-full object-cover" />
        
        </div>
      }

      {/* Actions */}
      <div className="flex items-center gap-6 px-4 py-3 border-t border-gray-100">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
          
          <motion.div
            whileTap={{
              scale: 1.2
            }}>
            
            <Heart
              className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            
          </motion.div>
          <span className="text-sm font-medium">{likes}</span>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
          
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{post.comments}</span>
        </button>
      </div>

      {/* Comments Section */}
      <AnimatePresence>
        {showComments &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          className="border-t border-gray-100 px-4 py-3 bg-gray-50">
          
            <p className="text-sm text-gray-500 mb-3">
              Comments coming soon...
            </p>
            <input
            type="text"
            placeholder="Add a comment..."
            className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary text-sm" />
          
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}