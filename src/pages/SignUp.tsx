import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, LockIcon, UserIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
import { LOGO_URL } from '../data';
interface SignUpProps {
  onSignUp: () => void;
  onGoToSignIn: () => void;
}
export function SignUp({ onSignUp, onGoToSignIn }: SignUpProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      onSignUp();
    }
  };
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 max-w-[430px] mx-auto">
      <motion.div
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6
        }}
        className="flex flex-col items-center mb-10">
        
        <img
          src={LOGO_URL}
          alt="PlantaCare"
          className="w-24 h-24 object-contain mb-4" />
        
        <h1 className="text-3xl font-bold text-primary-dark">Create Account</h1>
        <p className="text-gray-500 mt-1">Join the plant community</p>
      </motion.div>

      <motion.form
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6,
          delay: 0.2
        }}
        onSubmit={handleSubmit}
        className="w-full space-y-4">
        
        <div className="relative">
          <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:border-primary text-sm"
            required />
          
        </div>

        <div className="relative">
          <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:border-primary text-sm"
            required />
          
        </div>

        <div className="relative">
          <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-12 pr-12 py-4 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:border-primary text-sm"
            required />
          
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            
            {showPassword ?
            <EyeOffIcon className="w-5 h-5" /> :

            <EyeIcon className="w-5 h-5" />
            }
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-semibold text-base transition-colors">
          
          Sign Up
        </button>
      </motion.form>

      <motion.p
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 0.5
        }}
        className="mt-8 text-sm text-gray-500">
        
        Already have an account?{' '}
        <button
          onClick={onGoToSignIn}
          className="text-primary font-semibold hover:underline">
          
          Sign In
        </button>
      </motion.p>
    </div>);

}