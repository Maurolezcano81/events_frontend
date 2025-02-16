import React from "react";
import { motion } from "framer-motion";

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[60vh] flex-col gap-2">
      <motion.div
        className="w-16 h-16 border-4 border-gray-700 rounded-full border-t-transparent animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      <p>Cargando...</p>
    </div>
  );
};

export default Spinner;
