"use client";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from '@/components/ui/loader';

const SurahList = () => {
  const [surahs, setSurahs] = useState([]);
  const router = useRouter();
const [loader, setloader] = useState(false)
  useEffect(() => {
    const fetchSurahData = async () => {
      setloader(true)
      const response = await fetch('https://api.alquran.cloud/v1/surah');
      const data = await response.json();
      setSurahs(data.data);
      setloader(false)
    };
    fetchSurahData();
  }, []);

  const handleSurahClick = (surahId) => {
    router.push(`/surah/${surahId}`);
  };
  if(loader){
    return(<Loader/>)
    
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 p-10 ">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">Quran Surah List</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {surahs.map((surah) => (
          <motion.div
            key={surah.number}
            onClick={() => handleSurahClick(surah.number)}
            className="bg-white border border-gray-200 rounded-md p-3 cursor-pointer text-center"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.9}}   
            transition={{ duration: 0.2 }}
          >
            <span className="block text-teal-600 font-semibold text-lg">{surah.number}</span>
            <span className="block text-teal-600 text-2xl">{surah.name}</span>
            <span className="block text-gray-600 text-sm ">{surah.englishName}</span>
            <span className="block text-gray-500 text-xs ">{surah.englishNameTranslation}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SurahList;
