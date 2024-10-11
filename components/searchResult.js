import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ErrorCard from "./ui/errorcard";
import Loader from "./ui/loader";

const SearchResult = ({ similarAyats, error,loading }) => {
  if (error) {
    return (
<ErrorCard/>   
 );
}
  if(loading){
   return (<Loader/>)
    
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="w-full max-w-2xl z-10"
    >
      {similarAyats.map((ayat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="mb-4 bg-white bg-opacity-90 hover:shadow-lg transition duration-300">
            <CardHeader>
              <CardTitle className="text-base md:text-lg font-semibold text-gray-800 text-right">
                {ayat.Arabic}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-2 text-sm md:text-base">
                {ayat.UrduTranslation}
              </CardDescription>
              <CardDescription className="text-gray-600 mb-2 text-sm md:text-base">
                {ayat.EnglishTranslation}
              </CardDescription>
              <CardDescription className="text-gray-500 text-xs pt-1">
                Surah: {ayat.SurahNo} Ayat: {ayat.AyahNo}
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SearchResult;
