import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}
export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4
      }}
      whileTap={{
        scale: 0.98
      }}
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
      
      <div className="relative h-40 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover" />
        
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <button className="p-2 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-full transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>);

}