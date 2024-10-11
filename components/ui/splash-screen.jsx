"use client"

import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

export function SplashScreen() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/similarverse')
  }

  const handleClickSurahList = () => {
    router.push('/surah')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 flex flex-col items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-md md:text-3xl font-bold text-gray-800 mb-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Quranic Ayat Similarity
        </motion.h1>
        <motion.p
          className="text-xs md:text-xl text-gray-600 mb-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Discover similar Ayats from the Holy Quran
        </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col space-y-6  items-center"
          >
            <motion.button
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full py-3 px-8 text-xs md:text-lg font-semibold hover:from-green-600 hover:to-teal-600 transition duration-300 w-52 md:w-72"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
            >
              Explore Similar Ayats
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full py-3 px-8 text-xs md:text-lg font-semibold hover:from-green-600 hover:to-teal-600 transition duration-300 w-52 md:w-72"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClickSurahList}
            >
              Surah List
            </motion.button>
          </motion.div>
      </motion.div>
    </div>
  )
}
