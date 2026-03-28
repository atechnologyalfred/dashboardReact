import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


function Carousel() {
  const items = [
    {
      title: "Web Development",
      desc: "Learn MERN stack from scratch.",
      img: "https://images.unsplash.com/photo-1581276879432-15a7f6ee8f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    },
    {
      title: "Data Science",
      desc: "Analyze data like a pro.",
      img: "https://images.unsplash.com/photo-1555949963-fb3808b7a37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    },
    {
      title: "UI/UX Design",
      desc: "Design modern user interfaces.",
      img: "https://images.unsplash.com/photo-1596495577886-58b8d5a7c9f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    }
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((index - 1 + items.length) % items.length);
  const nextSlide = () => setIndex((index + 1) % items.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Popular Courses</h2>

      <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6"
          >
            <img
              src={items[index].img}
              alt={items[index].title}
              className="w-full md:w-1/2 rounded-2xl object-cover"
            />
            <div className="text-left md:w-1/2">
              <h3 className="font-semibold text-xl mb-2">{items[index].title}</h3>
              <p className="text-gray-600 text-sm">{items[index].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

export default Carousel;