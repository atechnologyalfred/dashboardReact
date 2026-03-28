import { motion } from "framer-motion";


function Benefits() {
  const items = [
    { title: "Study Materials", desc: "Access notes, past questions, and guides." },
    { title: "Collaboration", desc: "Work with classmates in real-time." },
    { title: "Track Progress", desc: "Monitor your learning journey." },
    { title: "Expert Courses", desc: "Learn from experienced instructors." }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl text-center font-bold mb-10">Benefits</h2>
      <div className="grid md:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {items.map((item, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Benefits;