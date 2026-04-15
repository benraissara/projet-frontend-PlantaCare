import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { MyPlants } from './pages/MyPlants';
import { Catalogue } from './pages/Catalogue';
import { CatalogueDetail } from './pages/CatalogueDetail';
import { Community } from './pages/Community';
import { Scanner } from './pages/Scanner';
import { Layout } from './components/Layout';
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authView, setAuthView] = useState<'signin' | 'signup'>('signin');
  if (!isAuthenticated) {
    if (authView === 'signup') {
      return (
        <SignUp
          onSignUp={() => setIsAuthenticated(true)}
          onGoToSignIn={() => setAuthView('signin')} />);


    }
    return (
      <SignIn
        onSignIn={() => setIsAuthenticated(true)}
        onGoToSignUp={() => setAuthView('signup')} />);


  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="my-plants" element={<MyPlants />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="catalogue/:categoryId" element={<CatalogueDetail />} />
          <Route path="community" element={<Community />} />
          <Route path="scanner" element={<Scanner />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>);

}