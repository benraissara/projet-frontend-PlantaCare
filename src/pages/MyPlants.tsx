import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, PlusIcon } from 'lucide-react';
import { PlantCard } from '../components/PlantCard';
import { MOCK_USER_PLANTS } from '../data';
import { LOGO_URL } from '../data';
export function MyPlants() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPlants = MOCK_USER_PLANTS.filter((plant) =>
  plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="px-4 lg:px-8 py-2">
      {/* Header with logo */}
      <motion.div
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="flex items-center justify-between mb-5">
        
        <div className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="PlantaCare"
            className="w-10 h-10 object-contain" />
          
          <div>
            <h2 className="text-xl font-bold text-primary-dark">My Plants</h2>
            <p className="text-xs text-gray-500">
              {MOCK_USER_PLANTS.length} plants
            </p>
          </div>
        </div>
        <button className="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors">
          <PlusIcon className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.1
        }}
        className="relative mb-5">
        
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search your plants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:border-primary text-sm shadow-sm" />
        
      </motion.div>

      {/* Plants Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
        {filteredPlants.map((plant, index) =>
        <motion.div
          key={plant.id}
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
          
            <PlantCard plant={plant} />
          </motion.div>
        )}
      </div>

      {filteredPlants.length === 0 &&
      <div className="text-center py-12">
          <p className="text-gray-400 text-sm">No plants found</p>
        </div>
      }
    </div>);

}