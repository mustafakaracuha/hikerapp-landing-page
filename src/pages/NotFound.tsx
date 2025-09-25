import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="mx-auto max-w-2xl text-center bg-white/70 backdrop-blur-md border border-green-100 rounded-3xl shadow-xl p-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-600 text-white shadow-lg mb-6">
              <span className="text-2xl font-bold">404</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Sayfayı bulamadık
            </h1>
            <p className="text-gray-600 mb-8">
              Aradığınız sayfa taşınmış olabilir, adı değişmiş olabilir ya da hiç
              var olmamış olabilir.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/" className="inline-flex items-center px-5 py-3 rounded-xl bg-gradient-to-br from-green-600 to-blue-600 text-white shadow hover:opacity-95">
                <Home className="w-4 h-4 mr-2" /> Ana sayfaya dön
              </Link>
              <Link to={-1 as unknown as string} className="inline-flex items-center px-5 py-3 rounded-xl border border-green-200 text-green-700 hover:bg-green-50">
                <ArrowLeft className="w-4 h-4 mr-2" /> Geri git
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
