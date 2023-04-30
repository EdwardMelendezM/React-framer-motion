import { motion } from "framer-motion"
import "./box.css"
import { useState } from "react";

export const Box = () => {

  const [move, setMove] = useState(false);
  return (
    <motion.div
      animate={{ x: move ? 100 : -100 }}
      onClick={() => setMove(!move)}
      transition={{ type: 'inertia', velocity: 40 }}
    >
    </motion.div>)
}
