import { Link } from "react-router-dom";

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
export default CTA;