import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const ErrorCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="w-auto max-w-2xl z-10"
    >
      <Card className="mb-4 bg-gradient-to-r from-green-100 to-teal-100  "> 
        <CardHeader>
          <CardTitle className="text-sm md:text-lg font-semibold text-gray-800 text-center">
            No Matching Results Found
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-700 text-xs md:text-base text-center">
            Please try a different search.
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ErrorCard;
