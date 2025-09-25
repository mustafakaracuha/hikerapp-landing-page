import { motion } from "framer-motion"; 
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
        <motion.div className="text-center space-y-4 mb-16" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.45}}>
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} className="group hover:shadow-nature transition-all duration-300 hover:-translate-y-1 bg-white/70 backdrop-blur-sm rounded-2xl border border-green-100" initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:index*0.05}}>
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
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
              {/* Phone gallery */}
              <div className="hidden md:block absolute -left-10 top-10 rotate-[-8deg]">
                <div className="bg-black rounded-[2.5rem] p-2 shadow-xl w-56">
                  <div className="rounded-[2rem] overflow-hidden h-[420px] bg-white">
                    <div className="h-6 bg-gray-100 flex items-center justify-between px-3 text-[10px] text-gray-500">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="w-3 h-3 rounded-full bg-amber-500" />
                      </div>
                    </div>
                    <div className="p-3 space-y-3">
                      <div className="h-28 rounded-xl bg-gradient-to-br from-green-100 to-blue-100 border border-green-100" />
                      <div className="grid grid-cols-3 gap-2 text-[10px]">
                        <div className="px-2 py-1 rounded-md bg-green-50 text-green-700 text-center">GPS</div>
                        <div className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-center">Weather</div>
                        <div className="px-2 py-1 rounded-md bg-amber-50 text-amber-700 text-center">Compass</div>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between bg-gray-50 rounded-md p-2">
                          <span className="text-gray-500">Distance</span>
                          <span className="font-semibold">5.6 km</span>
                        </div>
                        <div className="flex justify-between bg-gray-50 rounded-md p-2">
                          <span className="text-gray-500">Elevation</span>
                          <span className="font-semibold">780 m</span>
                        </div>
                      </div>
                      <button className="w-full mt-1 py-2 rounded-lg bg-green-600 text-white text-xs">Start</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-72 sm:w-80 mx-auto z-10">
                <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-[2.5rem] h-[560px] p-6 relative overflow-hidden">
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

              <div className="hidden md:block absolute -right-10 bottom-10 rotate-[8deg]">
                <div className="bg-black rounded-[2.5rem] p-2 shadow-xl w-56">
                  <div className="rounded-[2rem] overflow-hidden h-[420px] bg-white">
                    <div className="h-6 bg-gray-100 flex items-center justify-between px-3 text-[10px] text-gray-500">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="w-3 h-3 rounded-full bg-amber-500" />
                      </div>
                    </div>
                    <div className="p-3 space-y-3">
                      <div className="bg-white rounded-xl p-3 border space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Sarah</span>
                          <span className="text-gray-400">2m</span>
                        </div>
                        <p className="text-xs text-gray-700">Sunrise at the ridge today was stunning! Trail condition is great.</p>
                        <div className="h-20 rounded-lg bg-gradient-to-br from-blue-100 to-green-100" />
                        <div className="flex gap-2 text-[10px]">
                          <span className="px-2 py-1 rounded bg-gray-50">👍 18</span>
                          <span className="px-2 py-1 rounded bg-gray-50">💬 3</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-3 border space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Mike</span>
                          <span className="text-gray-400">10m</span>
                        </div>
                        <p className="text-xs text-gray-700">Found a waterfall spur – worth the detour.</p>
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