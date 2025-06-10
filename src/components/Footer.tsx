
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold font-arabic">ZakatChain</span>
            </div>
            <p className="text-primary-100 text-sm">
              Empowering transparent and Shariah-compliant zakat distribution through blockchain technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-primary-100">
              <li><Link to="/calculator" className="hover:text-white transition-colors">Zakat Calculator</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/education" className="hover:text-white transition-colors">Education</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-primary-100">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-100">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shariah Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-400 mt-8 pt-8 text-center text-sm text-primary-100">
          <p>&copy; 2024 ZakatChain. All rights reserved. Built with faith and technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
