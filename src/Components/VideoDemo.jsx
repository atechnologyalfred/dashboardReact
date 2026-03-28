import demo from '../assets/dashboard-demo.mp4';


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
export default VideoDemo;