import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, TrendingUp, CheckCircle } from 'lucide-react';
import { Plant } from '../types';
interface PlantCardProps {
  plant: Plant;
  onClick?: () => void;
}
export function PlantCard({ plant, onClick }: PlantCardProps) {
  const getStatusIcon = () => {
    switch (plant.status) {
      case 'Needs Water':
        return <Droplets className="w-4 h-4 text-blue-500" />;
      case 'Growing':
        return <TrendingUp className="w-4 h-4 text-yellow-500" />;
      case 'Healthy':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };
  const getStatusColor = () => {
    switch (plant.status) {
      case 'Needs Water':
        return 'bg-blue-50 text-blue-700';
      case 'Growing':
        return 'bg-yellow-50 text-yellow-700';
      case 'Healthy':
        return 'bg-green-50 text-green-700';
    }
  };
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
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover" />
        
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{plant.name}</h3>
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${getStatusColor()}`}>
          
          {getStatusIcon()}
          <span>{plant.status}</span>
        </div>
      </div>
    </motion.div>);

}