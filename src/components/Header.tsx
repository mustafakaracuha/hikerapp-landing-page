import { Button } from "@/components/ui/button";
import { Menu, Download } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="text-xl font-bold text-foreground">Hike</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#trails" className="text-muted-foreground hover:text-foreground transition-colors">Trails</a>
          <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">Community</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Login
          </Button>
          <Button variant="nature">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;