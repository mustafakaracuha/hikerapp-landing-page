import { Menu, Download, Apple, Play, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-green-100/50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div onClick={() => navigate("/")}  className="flex cursor-pointer items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 via-green-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Hiker
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="story-link text-gray-700 hover:text-green-600 font-medium transition-colors">Features</a>
              <a href="#trails" className="story-link text-gray-700 hover:text-green-600 font-medium transition-colors">Trails</a>
              <a href="#community" className="story-link text-gray-700 hover:text-green-600 font-medium transition-colors">Community</a>
              <a href="#about" className="story-link text-gray-700 hover:text-green-600 font-medium transition-colors">About</a>
              <a href="#contact" className="story-link text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</a>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="/login" className="px-3 py-2 rounded-md text-gray-700 hover:text-green-600 transition-colors">Login</a>
              <a href="/signup" className="px-4 py-2 rounded-lg bg-green-600 text-white shadow hover:opacity-95 transition-opacity">Sign Up</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 animate-fade-in">
            <nav className="space-y-4 mb-6">
              <a href="#features" className="block text-lg font-medium text-gray-700 hover:text-green-600 transition-colors">Features</a>
              <a href="#trails" className="block text-lg font-medium text-gray-700 hover:text-green-600 transition-colors">Trails</a>
              <a href="#community" className="block text-lg font-medium text-gray-700 hover:text-green-600 transition-colors">Community</a>
              <a href="#about" className="block text-lg font-medium text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#contact" className="block text-lg font-medium text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </nav>
            
            <div className="space-y-3 border-t pt-4">
              <a href="/login" className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Login</a>
              <a href="/signup" className="block w-full text-left px-3 py-2 rounded-md text-white bg-green-600 hover:opacity-95">Sign Up</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;