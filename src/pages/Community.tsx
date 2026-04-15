import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { PostCard } from '../components/PostCard';
import { NewPostModal } from '../components/NewPostModal';
import { MOCK_POSTS } from '../data';
export function Community() {
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  return (
    <div className="px-4 lg:px-8 py-2 relative">
      <motion.div
        initial={{
          opacity: 0,
          x: -20
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        className="flex items-center justify-between mb-5">
        
        <div>
          <h2 className="text-2xl font-bold text-primary-dark">Community</h2>
          <p className="text-gray-500 text-sm">Share & discover plant tips</p>
        </div>
      </motion.div>

      {/* Posts Feed */}
      <div className="pb-4 max-w-2xl mx-auto">
        {MOCK_POSTS.map((post, index) =>
        <motion.div
          key={post.id}
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.1 * index
          }}>
          
            <PostCard post={post} />
          </motion.div>
        )}
      </div>

      {/* Floating Action Button */}
      <motion.button
        whileTap={{
          scale: 0.9
        }}
        onClick={() => setIsNewPostOpen(true)}
        className="fixed bottom-24 lg:bottom-8 right-6 lg:right-8 w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-xl flex items-center justify-center z-30 transition-colors"
        aria-label="Create new post">
        
        <PlusIcon className="w-7 h-7" />
      </motion.button>

      <NewPostModal
        isOpen={isNewPostOpen}
        onClose={() => setIsNewPostOpen(false)} />
      
    </div>);

}