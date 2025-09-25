import { Menu, Download, Apple, Play, X, Facebook, Github } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
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
                Hiker App
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
              <button onClick={() => setIsLoginOpen(true)} className="px-3 py-2 rounded-md text-gray-700 hover:text-green-600 transition-colors">Login</button>
              <button onClick={() => setIsSignUpOpen(true)} className="px-4 py-2 rounded-lg bg-green-600 text-white shadow hover:opacity-95 transition-opacity">Sign Up</button>
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

      {/* Auth Modals */}
      <AnimatePresence>
        {isLoginOpen && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsLoginOpen(false)} />
            <motion.div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl border border-green-100 p-6" initial={{opacity:0, y:16, scale:0.98}} animate={{opacity:1, y:0, scale:1}} exit={{opacity:0, y:8, scale:0.98}} transition={{duration:0.25}}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Login</h3>
                <button onClick={() => setIsLoginOpen(false)} className="p-1 rounded-md hover:bg-gray-100"><X className="w-5 h-5" /></button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                  <input type="password" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="••••••••" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-green-600 text-white shadow hover:opacity-95">Sign in</button>
                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t" /></div>
                  <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">or continue with</span></div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12 c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.197l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.281-7.946l-6.49,5.003C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.793,2.237-2.231,4.166-4.087,5.565c0.001-0.001,0.002-0.001,0.003-0.002 l6.19,5.238C36.271,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                    <span className="sr-only">Google</span>
                  </button>
                  <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 hover:bg-gray-50">
                    <Facebook className="w-5 h-5 text-[#1877F2]" />
                    <span className="sr-only">Facebook</span>
                  </button>
                  <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 hover:bg-gray-50">
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSignUpOpen && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsSignUpOpen(false)} />
            <motion.div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl border border-green-100 p-6" initial={{opacity:0, y:16, scale:0.98}} animate={{opacity:1, y:0, scale:1}} exit={{opacity:0, y:8, scale:0.98}} transition={{duration:0.25}}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Sign Up</h3>
                <button onClick={() => setIsSignUpOpen(false)} className="p-1 rounded-md hover:bg-gray-100"><X className="w-5 h-5" /></button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                  <input type="password" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="••••••••" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-green-600 text-white shadow hover:opacity-95">Create account</button>
                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t" /></div>
                  <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">or continue with</span></div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12 c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.197l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.281-7.946l-6.49,5.003C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.793,2.237-2.231,4.166-4.087,5.565c0.001-0.001,0.002-0.001,0.003-0.002 l6.19,5.238C36.271,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                    <span className="sr-only">Google</span>
                  </button>
                  <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 hover:bg-gray-50">
                    <Facebook className="w-5 h-5 text-[#1877F2]" />
                    <span className="sr-only">Facebook</span>
                  </button>
                  <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 hover:bg-gray-50">
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
              <button onClick={() => { setIsMenuOpen(false); setIsLoginOpen(true); }} className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Login</button>
              <button onClick={() => { setIsMenuOpen(false); setIsSignUpOpen(true); }} className="block w-full text-left px-3 py-2 rounded-md text-white bg-green-600 hover:opacity-95">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;