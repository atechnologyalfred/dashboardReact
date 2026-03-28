import React, { useState } from "react";
import { motion } from "framer-motion";


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
export default FAQ;