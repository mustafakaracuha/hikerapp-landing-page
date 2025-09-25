 
import { 
  Smartphone, 
  Navigation, 
  Cloud, 
  Users, 
  Camera, 
  Shield,
  MapPin,
  Sun
} from "lucide-react";

const features = [
  {
    icon: Navigation,
    title: "GPS Navigation",
    description: "Real-time GPS tracking with offline maps to keep you on the right path, even without cell service."
  },
  {
    icon: Cloud,
    title: "Weather Updates", 
    description: "Live weather forecasts and alerts to help you plan the perfect hiking day and stay safe."
  },
  {
    icon: Camera,
    title: "Photo Sharing",
    description: "Capture and share your hiking memories with the community and create beautiful trail guides."
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with fellow hikers, join group adventures, and learn from experienced trail guides."
  },
  {
    icon: Shield,
    title: "Safety Features",
    description: "Emergency SOS, check-in reminders, and safety alerts to ensure you're always protected."
  },
  {
    icon: MapPin,
    title: "Trail Discovery",
    description: "Discover new trails based on your skill level, preferences, and location with personalized recommendations."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need for the
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Trail
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive hiking app provides all the tools and features you need for safe, enjoyable adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group hover:shadow-nature transition-all duration-300 hover:-translate-y-1 bg-white/70 backdrop-blur-sm rounded-2xl border border-green-100">
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* App Preview Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                All Features in
                <br />
                <span className="text-green-600">Your Pocket</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Our intuitive mobile app brings together navigation, weather, community, and safety features in one seamless experience designed for outdoor enthusiasts.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Sun className="w-6 h-6 text-amber-500" />
                  <div>
                    <div className="font-semibold text-foreground">Live Weather</div>
                    <div className="text-sm text-muted-foreground">Real-time updates</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Navigation className="w-6 h-6 text-blue-500" />
                  <div>
                    <div className="font-semibold text-foreground">GPS Tracking</div>
                    <div className="text-sm text-muted-foreground">Offline maps</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Mock phone interface */}
              <div className="relative w-80 mx-auto">
                <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-[2.5rem] h-[600px] p-6 relative overflow-hidden">
                    <div className="text-center space-y-4 pt-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl mx-auto flex items-center justify-center">
                        <Navigation className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">Trail Active</h4>
                      <p className="text-muted-foreground">Mount Eversting Trail</p>
                      
                      <div className="bg-white rounded-xl p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Distance</span>
                          <span className="font-semibold">2.3 / 12.5 km</span>
                        </div>
                        <div className="w-full bg-green-100 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-1/5"></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Elevation: 1,450m</span>
                          <span className="text-green-600 font-medium">On Track</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;