import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Leaf,
  ShoppingBag,
  Users,
  BookOpen,
  Settings,
  HelpCircle,
  LogOut,
  X } from
'lucide-react';
import { useNavigate } from 'react-router-dom';
interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
}
export function ProfileSidebar({
  isOpen,
  onClose,
  userName
}: ProfileSidebarProps) {
  const navigate = useNavigate();
  const menuItems = [
  {
    icon: Leaf,
    label: 'My Plants',
    path: '/my-plants'
  },
  {
    icon: ShoppingBag,
    label: 'Boutique',
    path: '/catalogue'
  },
  {
    icon: Users,
    label: 'Community',
    path: '/community'
  },
  {
    icon: BookOpen,
    label: 'Catalogue',
    path: '/catalogue'
  },
  {
    icon: Settings,
    label: 'Settings',
    path: '#'
  },
  {
    icon: HelpCircle,
    label: 'Help',
    path: '#'
  }];

  const handleNavigation = (path: string) => {
    if (path !== '#') {
      navigate(path);
    }
    onClose();
  };
  const handleLogout = () => {
    onClose();
    navigate('/');
  };
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          {/* Overlay */}
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
          className="fixed inset-0 bg-black/40 z-40" />
        

          {/* Sidebar */}
          <motion.div
          initial={{
            x: '-100%'
          }}
          animate={{
            x: 0
          }}
          exit={{
            x: '-100%'
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 200
          }}
          className="fixed top-0 left-0 bottom-0 w-[70%] max-w-[300px] bg-white z-50 shadow-2xl flex flex-col">
          
            <div className="p-6 bg-primary/5 relative">
              <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800">
              
                <X className="w-5 h-5" />
              </button>

              <div className="mt-4">
                <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary mb-3" />
              
                <h2 className="text-xl font-bold text-primary-dark">
                  Hi, {userName}
                </h2>
                <p className="text-sm text-gray-500">Plant Lover</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              <nav className="flex flex-col gap-1 px-4">
                {menuItems.map((item) =>
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 hover:text-primary transition-colors text-left">
                
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
              )}
              </nav>
            </div>

            <div className="p-4 border-t border-gray-100">
              <button
              onClick={handleLogout}
              className="flex items-center gap-4 px-4 py-3 w-full rounded-xl hover:bg-red-50 text-red-500 transition-colors text-left">
              
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Log Out</span>
              </button>
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}