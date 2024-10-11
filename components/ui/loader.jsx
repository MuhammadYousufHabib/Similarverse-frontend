import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50">
      <motion.div
        className="w-24 h-24 rounded-full border-8 border-green-200"
        style={{
          borderTopColor: "#10B981",
          borderRightColor: "#14B8A6",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Loader;