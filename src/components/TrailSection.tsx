import { motion } from "framer-motion"; 
import { Clock, MapPin, TrendingUp, Star } from "lucide-react";
import mountainTrail from "@/assets/mountain-trail.jpg";
import forestTrail from "@/assets/forest-trail.jpg";
import lakeTrail from "@/assets/lake-trail.jpg";

const trails = [
  {
    id: 1,
    name: "Mount Eversting Trail",
    location: "Rocky Mountains",
    difficulty: "Hard",
    duration: "6-8 hours",
    distance: "12.5 km",
    rating: 4.8,
    reviews: 234,
    image: mountainTrail,
    elevation: "2,450m",
    difficultyColor: "bg-red-100 text-red-700"
  },
  {
    id: 2,
    name: "Forest Discovery Walk",
    location: "Pine Forest",
    difficulty: "Easy",
    duration: "2-3 hours",
    distance: "5.2 km",
    rating: 4.6,
    reviews: 156,
    image: forestTrail,
    elevation: "850m",
    difficultyColor: "bg-green-100 text-green-700"
  },
  {
    id: 3,
    name: "Lake Summit Circuit",
    location: "Alpine Lakes",
    difficulty: "Medium",
    duration: "4-5 hours",
    distance: "8.7 km",
    rating: 4.9,
    reviews: 189,
    image: lakeTrail,
    elevation: "1,680m",
    difficultyColor: "bg-amber-100 text-amber-700"
  }
];

const TrailSection = () => {
  return (
    <section id="trails" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="text-center space-y-4 mb-16" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.45}}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Choose a Trail That
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Fits You
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From beginner-friendly walks to challenging mountain climbs, find the perfect trail for your next adventure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trails.map((trail) => (
            <motion.div key={trail.id} className="group hover:shadow-nature transition-all duration-300 hover:-translate-y-2 overflow-hidden rounded-xl border border-green-100 bg-white" initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}}>
              <div className="relative">
                <img 
                  src={trail.image} 
                  alt={trail.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${trail.difficultyColor}`}>{trail.difficulty}</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium">{trail.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{trail.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{trail.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span>{trail.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span>{trail.elevation}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="text-lg font-bold text-foreground">{trail.distance}</div>
                    <div className="text-sm text-muted-foreground">{trail.reviews} reviews</div>
                  </div>
                  <button className="px-3 py-2 text-sm rounded-md border border-green-200 text-green-700 hover:bg-green-50">Start Trail</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center px-5 py-3 rounded-xl border border-green-200 text-green-700 hover:bg-green-50">View All Trails</a>
        </div>
      </div>
    </section>
  );
};

export default TrailSection;