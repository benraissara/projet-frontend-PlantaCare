import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ScanLineIcon,
  CameraIcon,
  LeafIcon,
  DropletsIcon,
  SunIcon,
  InfoIcon } from
'lucide-react';
interface ScanResult {
  name: string;
  scientificName: string;
  image: string;
  care: {
    water: string;
    sunlight: string;
    tip: string;
  };
}
const PLANT_RESULTS: ScanResult[] = [
{
  name: 'Monstera Deliciosa',
  scientificName: 'Monstera deliciosa',
  image:
  'https://images.unsplash.com/photo-1614594975525-e45190c55d40?auto=format&fit=crop&q=80&w=400',
  care: {
    water: 'Water every 1-2 weeks',
    sunlight: 'Bright indirect light',
    tip: 'Wipe leaves regularly to keep them dust-free'
  }
},
{
  name: 'Snake Plant',
  scientificName: 'Sansevieria trifasciata',
  image:
  'https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?auto=format&fit=crop&q=80&w=400',
  care: {
    water: 'Water every 2-3 weeks',
    sunlight: 'Low to bright indirect light',
    tip: 'One of the best air-purifying plants'
  }
},
{
  name: 'Orchid',
  scientificName: 'Orchidaceae',
  image:
  'https://images.unsplash.com/photo-1512238701577-f181d9e05eb2?auto=format&fit=crop&q=80&w=400',
  care: {
    water: 'Water weekly, let roots dry between',
    sunlight: 'Bright indirect light',
    tip: 'Use orchid-specific fertilizer monthly'
  }
}];

export function Scanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const handleScan = () => {
    setIsScanning(true);
    setResult(null);
    setTimeout(() => {
      const randomPlant =
      PLANT_RESULTS[Math.floor(Math.random() * PLANT_RESULTS.length)];
      setResult(randomPlant);
      setIsScanning(false);
    }, 2500);
  };
  const handleReset = () => {
    setResult(null);
    setIsScanning(false);
  };
  return (
    <div className="px-4 py-2 flex flex-col items-center">
      <motion.h2
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="text-2xl font-bold text-primary-dark mb-2 self-start">
        
        Plant Scanner
      </motion.h2>
      <p className="text-gray-500 text-sm mb-6 self-start">
        Identify any plant instantly
      </p>

      {/* Scanner Viewfinder */}
      <AnimatePresence mode="wait">
        {!result ?
        <motion.div
          key="scanner"
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          exit={{
            opacity: 0,
            scale: 0.95
          }}
          className="w-full aspect-square max-w-[320px] bg-gray-900 rounded-3xl overflow-hidden relative flex items-center justify-center mb-6">
          
            {/* Simulated camera view */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 to-gray-900/50" />
            <img
            src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=600"
            alt="Camera view"
            className="absolute inset-0 w-full h-full object-cover opacity-60" />
          

            {/* Scan Frame */}
            <div className="relative w-56 h-56">
              <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-primary rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-primary rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-primary rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-primary rounded-br-xl" />

              {/* Scanning animation */}
              {isScanning &&
            <motion.div
              initial={{
                top: 0
              }}
              animate={{
                top: '100%'
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_rgba(45,106,79,0.8)]" />

            }
            </div>

            {isScanning &&
          <motion.p
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            className="absolute bottom-6 text-white text-sm font-medium">
            
                Scanning...
              </motion.p>
          }
          </motion.div> :

        <motion.div
          key="result"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="w-full bg-white rounded-3xl shadow-lg overflow-hidden mb-6">
          
            <div className="h-48 overflow-hidden">
              <img
              src={result.image}
              alt={result.name}
              className="w-full h-full object-cover" />
            
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-1">
                <LeafIcon className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-primary-dark">
                  {result.name}
                </h3>
              </div>
              <p className="text-sm text-gray-500 italic mb-4">
                {result.scientificName}
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-xl">
                  <DropletsIcon className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Water</p>
                    <p className="text-xs text-gray-600">{result.care.water}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-yellow-50 p-3 rounded-xl">
                  <SunIcon className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Sunlight
                    </p>
                    <p className="text-xs text-gray-600">
                      {result.care.sunlight}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-green-50 p-3 rounded-xl">
                  <InfoIcon className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Care Tip
                    </p>
                    <p className="text-xs text-gray-600">{result.care.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>

      {/* Action Button */}
      {!result ?
      <motion.button
        whileTap={{
          scale: 0.95
        }}
        onClick={handleScan}
        disabled={isScanning}
        className="flex items-center gap-3 bg-primary hover:bg-primary-dark disabled:bg-gray-300 text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg transition-colors">
        
          {isScanning ?
        <ScanLineIcon className="w-6 h-6 animate-pulse" /> :

        <CameraIcon className="w-6 h-6" />
        }
          {isScanning ? 'Scanning...' : 'Scan Plant'}
        </motion.button> :

      <motion.button
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        whileTap={{
          scale: 0.95
        }}
        onClick={handleReset}
        className="flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg transition-colors">
        
          <CameraIcon className="w-6 h-6" />
          Scan Another
        </motion.button>
      }
    </div>);

}