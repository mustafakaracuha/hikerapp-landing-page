import { Button } from "@/components/ui/button";
import { Menu, Download, Apple, Play, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-green-100/50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 via-green-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Hike
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
              <Button variant="ghost" className="text-gray-700 hover:text-green-600">
                Login
              </Button>
              
              {/* App Store Buttons */}
              <div className="flex items-center space-x-2">
                <Button variant="download" size="sm" className="justify-start hover-scale">
                  <Apple className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <div className="text-xs opacity-90 leading-tight">Download on</div>
                    <div className="text-sm font-semibold leading-tight">App Store</div>
                  </div>
                </Button>
                <Button variant="download" size="sm" className="justify-start hover-scale">
                  <Play className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <div className="text-xs opacity-90 leading-tight">Get it on</div>
                    <div className="text-sm font-semibold leading-tight">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
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
              <Button variant="ghost" className="w-full justify-start text-gray-700">
                Login
              </Button>
              
              <div className="space-y-2">
                <Button variant="download" className="w-full justify-start">
                  <Apple className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Button>
                <Button variant="download" className="w-full justify-start">
                  <Play className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;