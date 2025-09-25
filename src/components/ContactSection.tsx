const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Get in
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Questions, feedback, or partnership ideas? We’d love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
          <form className="grid sm:grid-cols-2 gap-6">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea className="w-full rounded-lg border border-gray-300 px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="How can we help?" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full sm:w-auto inline-flex items-center px-6 py-3 rounded-xl bg-green-600 text-white shadow hover:opacity-95">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


