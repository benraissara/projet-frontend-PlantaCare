import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon, Send } from 'lucide-react';
interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function NewPostModal({ isOpen, onClose }: NewPostModalProps) {
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const categories = ['Help', 'Share', 'Tips'];
  const handleSubmit = () => {
    if (content.trim()) {
      // In a real app, this would submit to backend
      console.log('New post:', {
        content,
        category: selectedCategory
      });
      setContent('');
      setSelectedCategory('');
      onClose();
    }
  };
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-50" />
        

          <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 20
          }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-3xl shadow-2xl z-50 overflow-hidden">
          
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">Create Post</h3>
              <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-4">
              <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your plant journey..."
              className="w-full h-32 p-3 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:border-primary text-sm" />
            

              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Category
                </p>
                <div className="flex gap-2">
                  {categories.map((cat) =>
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  
                      {cat}
                    </button>
                )}
                </div>
              </div>

              <button className="flex items-center gap-2 mt-4 px-4 py-2 text-primary hover:bg-green-50 rounded-xl transition-colors">
                <ImageIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Add Photo</span>
              </button>
            </div>

            <div className="p-4 border-t border-gray-100">
              <button
              onClick={handleSubmit}
              disabled={!content.trim()}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:bg-gray-300 text-white py-3 rounded-full font-semibold transition-colors">
              
                <Send className="w-5 h-5" />
                Post
              </button>
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}