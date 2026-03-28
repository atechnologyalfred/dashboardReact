import { motion } from "framer-motion";
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Learn Smarter, Study Better, Achieve More 🎓
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Join thousands of students improving their learning experience with tools, collaboration, and expert-led courses.
          </p>
          <div className="flex gap-4">
           <Link to="/register"><button className="bg-blue-600 text-white px-6 py-3 rounded-xl">Get Started</button></Link>
          <Link to="/dashboard"><button className="border px-6 py-3 rounded-xl">Learn More</button></Link>
          </div>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
          className="rounded-2xl shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        />
      </div>
    </section>
  );
}
export default Hero;