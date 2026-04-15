import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Wrench, Sprout } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const catalogueCategories = [
{
  id: 'Plants',
  name: 'Plants',
  icon: Leaf,
  image:
  'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=600',
  description: 'Indoor & outdoor plants',
  color: 'from-green-600 to-green-800'
},
{
  id: 'Outil',
  name: 'Tools',
  icon: Wrench,
  image:
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=600',
  description: 'Gardening tools & accessories',
  color: 'from-amber-600 to-amber-800'
},
{
  id: 'Seeds',
  name: 'Seeds',
  icon: Sprout,
  image:
  'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600',
  description: 'Flower & vegetable seeds',
  color: 'from-emerald-600 to-emerald-800'
}];

export function Catalogue() {
  const navigate = useNavigate();
  return (
    <div className="px-4 lg:px-8 py-2">
      <motion.h2
        initial={{
          opacity: 0,
          x: -20
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        className="text-2xl font-bold text-primary-dark mb-5">
        
        Catalogue
      </motion.h2>

      <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 pb-4">
        {catalogueCategories.map((cat, index) => {
          const IconComp = cat.icon;
          return (
            <motion.button
              key={cat.id}
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
              }}
              whileTap={{
                scale: 0.98
              }}
              onClick={() => navigate(`/catalogue/${cat.id}`)}
              className="w-full relative h-44 rounded-3xl overflow-hidden shadow-lg text-left">
              
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover" />
              
              <div
                className={`absolute inset-0 bg-gradient-to-r ${cat.color} opacity-70`} />
              
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                    <IconComp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
                </div>
                <p className="text-white/80 text-sm">{cat.description}</p>
              </div>
            </motion.button>);

        })}
      </div>
    </div>);

}