const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              About
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Hiker</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We’re a team of outdoor enthusiasts building tools to help you hike smarter and explore further. Hiker brings navigation, weather, safety, and community together in a clean, reliable experience.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-green-100 bg-white/70 backdrop-blur-sm">
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Active hikers</div>
              </div>
              <div className="p-6 rounded-2xl border border-blue-100 bg-white/70 backdrop-blur-sm">
                <div className="text-3xl font-bold text-foreground">1,000+</div>
                <div className="text-sm text-muted-foreground">Curated trails</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-green-100 bg-gradient-to-br from-green-50 to-blue-50 aspect-[16/10]">
            <img 
              src="https://img.freepik.com/free-vector/adventure-background_23-2149048249.jpg?semt=ais_hybrid&w=740&q=80" 
              alt="Hiking themed illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


