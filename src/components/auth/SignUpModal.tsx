import { AnimatePresence, motion } from "framer-motion";
import { X, Mail, Lock, Facebook, Github, User } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const SignUpModal = ({ open, onClose }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <motion.div className="absolute inset-0 bg-black/40" onClick={onClose} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} />
          <motion.div className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl p-0 overflow-hidden"
            initial={{opacity:0, y:24, scale:0.96}}
            animate={{opacity:1, y:0, scale:1}}
            exit={{opacity:0, y:8, scale:0.98}}
            transition={{type:"spring", stiffness:260, damping:24}}>
            <div className="relative">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-full blur-3xl" />
              <div className="relative bg-white border border-green-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Create an account</h3>
                    <p className="text-sm text-gray-500">Join the community</p>
                  </div>
                  <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-100"><X className="w-5 h-5" /></button>
                </div>
                <form className="space-y-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input type="text" className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input type="email" className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input type="password" className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="••••••••" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                    <span>Agree to <a href="#" className="text-green-600 hover:underline">Terms</a> & <a href="#" className="text-green-600 hover:underline">Privacy</a></span>
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-green-600 text-white shadow hover:opacity-95">Create account</button>
                  <div className="relative my-2">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t" /></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">or continue with</span></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12 c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.197l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.281-7.946l-6.49,5.003C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.793,2.237-2.231,4.166-4.087,5.565c0.001-0.001,0.002-0.001,0.003-0.002 l6.19,5.238C36.271,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignUpModal;


