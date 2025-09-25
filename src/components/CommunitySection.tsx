import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const communityPosts = [
  {
    id: 1,
    user: {
      name: "Sarah Chen",
      avatar: "/api/placeholder/40/40",
      level: "Expert Hiker"
    },
    location: "Yosemite National Park",
    image: "/api/placeholder/300/200",
    caption: "Amazing sunrise from Half Dome! The early morning hike was totally worth it. Can't wait to share the full route guide with everyone.",
    likes: 156,
    comments: 23,
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    user: {
      name: "Mike Rodriguez",
      avatar: "/api/placeholder/40/40",
      level: "Trail Guide"
    },
    location: "Rocky Mountain National Park",
    image: "/api/placeholder/300/200",
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
              <Button variant="outline">View All Posts</Button>
            </div>

            {communityPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Post Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={post.user.avatar} />
                        <AvatarFallback>{post.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">{post.user.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            <Award className="w-3 h-3 mr-1" />
                            {post.user.level}
                          </Badge>
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
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                      <Camera className="w-12 h-12 text-muted-foreground" />
                    </div>
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
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardContent className="p-6 space-y-4">
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
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardContent className="p-6 space-y-4">
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
                        <Badge className="text-xs" variant={event.difficulty === 'Hard' ? 'destructive' : event.difficulty === 'Easy' ? 'secondary' : 'default'}>
                          {event.difficulty}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="nature" className="w-full" size="sm">
                  View All Events
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;