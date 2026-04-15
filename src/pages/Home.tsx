import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from '../components/Carousel';
import { ProductCard } from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../data';
const categories = ['ALL', 'Flower', 'Outil', 'Seeds'] as const;
export function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const filteredProducts =
  activeCategory === 'ALL' ?
  MOCK_PRODUCTS :
  MOCK_PRODUCTS.filter((p) => p.category === activeCategory);
  return (
    <div className="px-4 lg:px-8 py-2">
      {/* Greeting */}
      <motion.div
        initial={{
          opacity: 0,
          x: -20
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        className="mb-5">
        
        <h2 className="text-2xl font-bold text-primary-dark">Hello, Sara 👋</h2>
        <p className="text-gray-500 text-sm mt-1">
          Let's take care of your plants today
        </p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.1
        }}
        className="mb-6">
        
        <Carousel />
      </motion.div>

      {/* Best Collection */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.2
        }}>
        
        <h3 className="text-lg font-bold text-primary-dark mb-3">
          Best Collection
        </h3>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-primary text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'}`}>
            
              {cat}
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
          {filteredProducts.map((product, index) =>
          <motion.div
            key={product.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.05 * index
            }}>
            
              <ProductCard product={product} />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>);

}