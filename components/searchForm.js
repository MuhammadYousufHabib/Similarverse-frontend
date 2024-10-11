import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");


  useEffect(() => {
    const storedVerse = localStorage.getItem('currentVerse');
    if (storedVerse) {
      setQuery(storedVerse);
      onSubmit(storedVerse)
      localStorage.removeItem('currentVerse'); 
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-md z-10 mb-12"
    >
      <div className="relative">
        <Input
          type="text"
          placeholder="Enter Arabic Ayat or Surah:Ayat (e.g., 2:255)"
          value={localStorage.getItem('currentVerse') ? localStorage.getItem('currentVerse') :query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-green-200 focus:border-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50 bg-white bg-opacity-90 text-xs"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      <Button
        type="submit"
        className="mt-4 w-full bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full py-2 px-4 hover:from-green-600 hover:to-teal-600 transition duration-300 text-xs"
      >
        Find Similar Ayats
      </Button>
    </motion.form>
  );
};

export default SearchForm;
