import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../data';
export function CatalogueDetail() {
  const { categoryId } = useParams<{
    categoryId: string;
  }>();
  const navigate = useNavigate();
  const categoryNames: Record<string, string> = {
    Plants: 'Plants',
    Outil: 'Tools',
    Seeds: 'Seeds',
    Flower: 'Flowers'
  };
  const filteredProducts = MOCK_PRODUCTS.filter(
    (p) => p.category === categoryId
  );
  const categoryName = categoryNames[categoryId || ''] || categoryId;
  return (
    <div className="px-4 lg:px-8 py-2">
      {/* Back Header */}
      <motion.div
        initial={{
          opacity: 0,
          x: -20
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        className="flex items-center gap-3 mb-5">
        
        <button
          onClick={() => navigate('/catalogue')}
          className="p-2 rounded-full hover:bg-green-50 transition-colors">
          
          <ArrowLeftIcon className="w-6 h-6 text-primary-dark" />
        </button>
        <h2 className="text-2xl font-bold text-primary-dark">{categoryName}</h2>
      </motion.div>

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

      {filteredProducts.length === 0 &&
      <div className="text-center py-16">
          <p className="text-gray-400">No products in this category yet</p>
        </div>
      }
    </div>);

}