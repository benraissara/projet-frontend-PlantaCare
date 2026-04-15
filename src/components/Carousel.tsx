import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface CarouselSlide {
  id: string;
  image: string;
  title: string;
  discount: string;
}
const slides: CarouselSlide[] = [
{
  id: '1',
  image:
  'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?auto=format&fit=crop&q=80&w=800',
  title: 'Spring Collection',
  discount: 'Up to 15% OFF'
},
{
  id: '2',
  image:
  'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=800',
  title: 'Indoor Plants',
  discount: 'Up to 15% OFF'
},
{
  id: '3',
  image:
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800',
  title: 'Garden Tools',
  discount: 'Up to 15% OFF'
}];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };
  return (
    <div className="relative w-full h-48 lg:h-72 rounded-2xl overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            x: 100
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 0,
            x: -100
          }}
          transition={{
            duration: 0.5
          }}
          className="absolute inset-0">
          
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold mb-1">
              {slides[currentIndex].title}
            </h3>
            <p className="text-lg font-semibold bg-primary px-3 py-1 rounded-full inline-block">
              {slides[currentIndex].discount}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all z-10"
        aria-label="Previous slide">
        
        <ChevronLeft className="w-5 h-5 text-primary-dark" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all z-10"
        aria-label="Next slide">
        
        <ChevronRight className="w-5 h-5 text-primary-dark" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) =>
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
          aria-label={`Go to slide ${index + 1}`} />

        )}
      </div>
    </div>);

}