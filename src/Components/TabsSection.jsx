import React, {  useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


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
export default TabsSection;