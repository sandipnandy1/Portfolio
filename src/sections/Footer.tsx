import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Sandip Nandy</h3>
            <p className="text-gray-400 mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/sandipnandy1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/sandipnandy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
