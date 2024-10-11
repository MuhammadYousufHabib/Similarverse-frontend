import React from 'react'
import { motion } from "framer-motion";


const searchHeader = ({buttonClicked}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="z-10 text-center mb-8"
  >
    {!buttonClicked && (
      <div>
        <h1 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">
          Quranic Ayat Similarity
        </h1>
        <p className="text-xs md:text-sm text-gray-600">
          Discover similar Ayats from the Holy Quran
        </p>
      </div>
    )}
  </motion.div>  )
}

export default searchHeader