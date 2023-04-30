import { motion } from "framer-motion";
const Drag = () => {
  return (
    <motion.div
      drag="x"
      whileDrag={{ scale: 1.2 }}
      dragConstraints={{ left: 50 }}
    ></motion.div>
  );
}

export default Drag;