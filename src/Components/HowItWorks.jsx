import { motion, AnimatePresence } from "framer-motion";

function HowItWorks() {
  const steps = [
    { title: "Sign Up", desc: "Create your free account." },
    { title: "Choose Course", desc: "Pick what you want to learn." },
    { title: "Start Learning", desc: "Access lessons instantly." }
  ];

  return (
    <section id="howitwork" className="py-16 bg-gray-50">
      <h2 className="text-3xl text-center font-bold mb-10">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {steps.map((step, i) => (
          <motion.div key={i} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">{i+1}</div>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default HowItWorks;
