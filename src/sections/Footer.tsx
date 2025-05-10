

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/sandipnandy" className="hover:text-purple-400">View on LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
