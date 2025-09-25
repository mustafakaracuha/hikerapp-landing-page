import { Apple, Play, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-2xl font-bold">Hiker</span>
            </div>
            <p className="text-green-100 leading-relaxed">
              Your ultimate hiking companion for discovering trails, connecting with nature, and building lasting memories.
            </p>
            <div className="flex gap-4">
              <a href="#" className="inline-flex items-center px-3 py-2 rounded-lg bg-white text-gray-600 shadow">
                <Apple className="w-4 h-4 mr-2" />
                App Store
              </a>
              <a href="#" className="inline-flex items-center px-3 py-2 rounded-lg bg-white text-gray-600 shadow">
                <Play className="w-4 h-4 mr-2" />
                Google Play
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-green-100">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#trails" className="hover:text-white transition-colors">Trails</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-green-100">
              <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#safety" className="hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#feedback" className="hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-green-100 text-sm">
              Follow us for the latest trail updates and hiking tips.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-md text-white hover:bg-white/10"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-md text-white hover:bg-white/10"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-md text-white hover:bg-white/10"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-md text-white hover:bg-white/10"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-200 text-sm">
              © 2025 Hiker App. All rights reserved.
            </p>
            <p className="text-green-200 text-sm">
              Made with ❤️ for outdoor enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;