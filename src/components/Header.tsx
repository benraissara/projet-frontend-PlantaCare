import React from 'react';
import { Menu, Home, Leaf, BookOpen, Users, ScanLine } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGO_URL } from '../data';
interface HeaderProps {
  onMenuClick: () => void;
}
export function Header({ onMenuClick }: HeaderProps) {
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
    label: 'Scan'
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
    <header className="flex justify-between items-center p-4 lg:px-8 bg-background sticky top-0 z-10 border-b border-gray-100 lg:border-none">
      <div className="flex items-center gap-2">
        <img
          src={LOGO_URL}
          alt="PlantaCare Logo"
          className="w-10 h-10 object-contain pt-[0px] pb-[0px] pl-[0px] pr-[0px]" />
        
        <span className="font-bold text-primary-dark text-xl">PlantaCare</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-2 font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-500 hover:text-primary-light'}`}>
              
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>);

        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="p-2 rounded-full hover:bg-green-50 transition-colors lg:hidden"
        aria-label="Open menu">
        
        <Menu className="w-6 h-6 text-primary-dark" />
      </button>
    </header>);

}