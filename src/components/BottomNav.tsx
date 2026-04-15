import React from 'react';
import { Home, Leaf, BookOpen, Users, ScanLine } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const navItems = [
  {
    path: '/home',
    icon: Home,
    label: 'Home'
  },
  {
    path: '/my-plants',
    icon: Leaf,
    label: 'My Plants'
  },
  {
    path: '/scanner',
    icon: ScanLine,
    label: 'Scan',
    isCenter: true
  },
  {
    path: '/catalogue',
    icon: BookOpen,
    label: 'Catalogue'
  },
  {
    path: '/community',
    icon: Users,
    label: 'Community'
  }];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 pb-safe z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:hidden">
      <div className="flex justify-between items-center max-w-md mx-auto relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);
          if (item.isCenter) {
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="relative -top-6 flex flex-col items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg text-white hover:bg-primary-dark transition-colors">
                
                <Icon className="w-6 h-6" />
              </button>);

          }
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 min-w-[48px] ${isActive ? 'text-primary' : 'text-gray-400 hover:text-primary-light'} transition-colors`}>
              
              <Icon
                className={`w-6 h-6 ${isActive ? 'fill-primary/20' : ''}`} />
              
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>);

        })}
      </div>
    </div>);

}