import { motion } from "framer-motion";


const testimonials = [
  {
    name: "Aisha Bello",
    course: "Web Development",
    feedback: "This platform transformed my coding skills! The instructors are amazing.",
    img: "https://images.unsplash.com/photo-1603415526960-f0b6ecfae96c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200"
  },
  {
    name: "Chike Okafor",
    course: "Data Science",
    feedback: "I landed my first data analyst job thanks to these courses.",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200"
  },
  {
    name: "Fatima Yusuf",
    course: "UI/UX Design",
    feedback: "The hands-on projects really helped me build a strong portfolio.",
    img: "https://images.unsplash.com/photo-1614284747440-6e4a72f314df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200"
  }
];

function Testimonials() {
  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.course}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">"{t.feedback}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Testimonials;