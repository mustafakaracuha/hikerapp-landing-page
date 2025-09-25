import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-green-100 p-8">
            <h1 className="text-2xl font-bold text-foreground mb-6">Login</h1>
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
              <p className="text-sm text-muted-foreground text-center">No account? <Link to="/signup" className="text-green-600 hover:underline">Sign up</Link></p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;


