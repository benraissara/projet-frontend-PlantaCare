import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { BottomNav } from './BottomNav';
import { ProfileSidebar } from './ProfileSidebar';
export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background flex flex-col relative max-w-[430px] lg:max-w-7xl mx-auto shadow-2xl lg:shadow-none overflow-hidden">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />

      <main className="flex-1 overflow-y-auto pb-24 lg:pb-8 no-scrollbar">
        <Outlet />
      </main>

      <BottomNav />

      <ProfileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        userName="Sarah" />
      
    </div>);

}