import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Section({ title, children, defaultOpen = true, className = '' }: SectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`bg-white mb-4 shadow-sm border border-gray-200 ${className}`}>
      <div 
        className="flex justify-between items-center px-6 py-4 cursor-pointer border-b border-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-bold text-gray-800 border-l-4 border-black pl-3 leading-none">
          {title}
        </h2>
        <div className="flex items-center text-gray-500 text-sm hover:text-gray-700">
          <span className="mr-1">{isOpen ? '收起' : '展开'}</span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-[#F7F8FA]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
