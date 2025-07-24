import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black px-6 text-center">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        401 - Unauthorized
      </motion.h1>
      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        You do not have permission to view this page. Please log in.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-6"
      >
        <Link
          to="/"
          className="px-6 py-3 text-white bg-black rounded-lg hover:bg-gray-800 transition"
        >
          Login
        </Link>
      </motion.div>
    </div>
  );
}
