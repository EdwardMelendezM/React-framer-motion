import { motion } from "framer-motion";
const BoxAnimation = () => {
  return (
    <motion.div
      animate={{ rotate: [0, 200, 200, 0, -200, -200, 0], x: [0, 300, 300, 0, -300, -300, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    ></motion.div>
  );
}

export default BoxAnimation;