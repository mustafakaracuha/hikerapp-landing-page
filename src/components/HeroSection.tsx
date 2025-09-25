import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Apple, Play, Star, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-hiking.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cyan-50 to-green-50 pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/50 to-green-100/50" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hike Smarter,<br />
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Explore Further
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover amazing trails, connect with fellow hikers, and make every adventure memorable with our comprehensive hiking companion.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="download" size="lg" className="justify-start">
                <Apple className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
              <Button variant="download" size="lg" className="justify-start">
                <Play className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-sm text-muted-foreground">50K+ Active Hikers</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-muted-foreground">1000+ Trails</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-muted-foreground">4.8 Rating</span>
              </div>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Beautiful hiking scene with mountains, trees, and trails"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute top-8 left-8 p-4 bg-white/90 backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Trail Active</div>
                  <div className="text-muted-foreground">2.3 km completed</div>
                </div>
              </div>
            </Card>

            <Card className="absolute bottom-8 right-8 p-4 bg-white/90 backdrop-blur-sm shadow-lg">
              <div className="text-sm">
                <div className="font-semibold text-foreground">Weather</div>
                <div className="text-muted-foreground">Sunny, 22°C</div>
                <div className="text-green-600 font-medium">Perfect for hiking!</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;