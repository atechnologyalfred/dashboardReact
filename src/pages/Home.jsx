import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'
import demo from '../assets/dashboard-demo.mp4';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Benefits from "../Components/Benefits";
import HowItWorks from "../Components/HowItWorks";

export default function StudentLandingPage() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <VideoDemo />
      <Carousel />
      <TabsSection />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}



// ================= VIDEO =================
function VideoDemo() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Watch How It Works</h2>
      <div className="max-w-4xl mx-auto px-6">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
          <video className="w-full h-full object-cover" controls autoPlay muted loop>
            <source src={demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}



// ================= AUTO SLIDER =================
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


// ================= TABS =================
function TabsSection() {
  const [active, setActive] = useState("courses");

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Explore</h2>
      <div className="flex justify-center gap-6 mb-6">
        {["courses","pricing","features"].map(tab => (
          <button key={tab} onClick={()=>setActive(tab)} className={active===tab?"border-b-2 border-blue-600":""}>{tab}</button>
        ))}
      </div>
      <motion.div key={active} initial={{opacity:0}} animate={{opacity:1}} className="text-gray-600">
        {active === "courses" && "Browse a variety of courses."}
        {active === "pricing" && "Flexible pricing plans."}
        {active === "features" && "Tools designed for students."}
      </motion.div>
    </section>
  );
}

// ================= TESTIMONIALS =================
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

// ================= FAQ =================
const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer Web Development, Data Science, UI/UX Design, and more."
  },
  {
    question: "Can I get a certificate?",
    answer: "Yes, all completed courses come with a verified certificate."
  },
  {
    question: "What is the refund policy?",
    answer: "You can request a full refund within 14 days of enrollment."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto px-4 space-y-4">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            className="border rounded-xl p-4 bg-white shadow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => toggleIndex(i)}
              className="flex justify-between items-center w-full text-left text-gray-700 font-medium"
            >
              <span>{item.question}</span>
              <span className="text-gray-400 font-bold text-lg ml-2">{openIndex === i ? '−' : '+'}</span>
            </button>
            {openIndex === i && (
              <motion.p
                className="mt-2 text-gray-600 text-sm"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}


// ================= CTA =================
function CTA() {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Join Thousands of Students Today</h2>
      <p className="mb-6">Start your learning journey now.</p>
      <Link to="/register"><button className="cursor-pointer bg-white text-blue-600 px-6 py-3 rounded-xl">
        Join Now</button></Link>
    </section>
  );
}

// ================= FOOTER =================
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-2">StudentHub</h3>
          <p>Empowering students worldwide.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>support@studenthub.com</p>
        </div>
      </div>
      <p className="text-center mt-6 text-sm">© 2026 StudentHub</p>
    </footer>
  );
}