function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10" id="about">
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
export default Footer;