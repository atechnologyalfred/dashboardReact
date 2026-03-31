import { motion } from "framer-motion";

function Modal({ onClose, children }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.7, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.7, y: 100 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-xl w-[90%] md:w-[500px]"
      >
        <button onClick={onClose} className="mb-4">Close</button>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Modal;
