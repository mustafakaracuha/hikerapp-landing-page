 
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Camera,
  Users,
  Award,
  MapPin,
  Calendar
} from "lucide-react";
import mountainTrail from "@/assets/mountain-trail.jpg";
import forestTrail from "@/assets/forest-trail.jpg";
import lakeTrail from "@/assets/lake-trail.jpg";

const communityPosts = [
  {
    id: 1,
    user: {
      name: "Sarah Chen",
      avatar: forestTrail,
      level: "Expert Hiker"
    },
    location: "Yosemite National Park",
    image: mountainTrail,
    caption: "Amazing sunrise from Half Dome! The early morning hike was totally worth it. Can't wait to share the full route guide with everyone.",
    likes: 156,
    comments: 23,
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    user: {
      name: "Mike Rodriguez",
      avatar: lakeTrail,
      level: "Trail Guide"
    },
    location: "Rocky Mountain National Park",
    image: forestTrail,
    caption: "Perfect weather for the Bear Lake trail today! Found some amazing wildlife photography spots along the way.",
    likes: 89,
    comments: 12,
    timeAgo: "5 hours ago"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Group Hike: Mountain Peak Challenge",
    date: "Oct 15, 2024",
    location: "Mount Washington",
    participants: 12,
    maxParticipants: 15,
    difficulty: "Hard"
  },
  {
    id: 2,
    title: "Photography Walk in Forest",
    date: "Oct 18, 2024", 
    location: "Pine Forest Trail",
    participants: 8,
    maxParticipants: 10,
    difficulty: "Easy"
  }
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Share Your Adventure with the
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow hikers, share your experiences, and discover new trails through our vibrant community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Community Feed */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">Recent Adventures</h3>
              <a href="#" className="px-4 py-2 rounded-lg border border-green-200 text-green-700 hover:bg-green-50">View All Posts</a>
            </div>

            {communityPosts.map((post) => (
              <div key={post.id} className="overflow-hidden group rounded-xl border border-green-100 bg-white">
                <div className="p-0">
                  {/* Post Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-green-500/30 to-blue-600/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full ring-2 ring-white shadow-md object-cover" />
                        <span className="absolute -bottom-0.5 -right-0.5 inline-flex h-3 w-3">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600" />
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">{post.user.name}</h4>
                          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-700">
                            <Award className="w-3 h-3 mr-1" />
                            {post.user.level}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{post.location}</span>
                          <span>•</span>
                          <span>{post.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Post Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.location}
                      className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Post Content */}
                  <div className="p-6 pt-4 space-y-4">
                    <p className="text-foreground">{post.caption}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors">
                          <Heart className="w-5 h-5" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors">
                          <Share2 className="w-5 h-5" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="rounded-xl border border-green-100 bg-white">
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Active Hikers</span>
                    <span className="font-semibold text-green-600">50,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Trails Shared</span>
                    <span className="font-semibold text-blue-600">1,567</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Photos Posted</span>
                    <span className="font-semibold text-amber-600">23,891</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="rounded-xl border border-green-100 bg-white">
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Upcoming Group Hikes</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-4 bg-muted rounded-lg space-y-2">
                      <h4 className="font-semibold text-foreground text-sm">{event.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs">
                          <Users className="w-3 h-3 text-green-600" />
                          <span>{event.participants}/{event.maxParticipants} joined</span>
                        </div>
                        <span className={`px-2 py-1 rounded-md text-xs ${event.difficulty === 'Hard' ? 'bg-red-100 text-red-700' : event.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {event.difficulty}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full px-4 py-2 rounded-md border border-green-200 text-green-700 hover:bg-green-50 text-sm">View All Events</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;