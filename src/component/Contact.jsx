import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-linear-to-br from-blue-600 via-purple-600 to-pink-500 animate-fadeInUp"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-white font-semibold text-sm uppercase tracking-wider mb-3">
            Contact Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Products Tested
          </h2>
          <p className="text-white/80 text-lg">
            Have questions or ready to submit samples? Reach out to us and our
            team will assist you with all your testing needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: "Phone",
                lines: ["+91 123 456 7890", "+91 987 654 3210"],
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["info@minulab.com", "testing@minulab.com"],
              },
              {
                icon: MapPin,
                title: "Address",
                lines: [
                  "Plot No. 45, Industrial Area,",
                  "Phase 2, New Delhi - 110020",
                ],
              },
              {
                icon: Clock,
                title: "Working Hours",
                lines: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
              },
            // eslint-disable-next-line no-unused-vars
            ].map(({ icon: Icon, title, lines }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 mb-1">
                      {title}
                    </h3>
                    {lines.map((line, j) => (
                      <p key={j} className="text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Request a Quote
            </h3>

            <form className="space-y-6">
              {/* Inputs */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Testing Service *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="plywood">Plywood Testing</option>
                    <option value="furniture">Furniture Testing</option>
                    <option value="timber">Timber Analysis</option>
                    <option value="dimensional">Dimensional Testing</option>
                    <option value="fire">Fire Resistance Testing</option>
                    <option value="moisture">Moisture Testing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message / Requirements
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your testing requirements..."
                />
              </div>

              {/* Styled HTML Button */}
              <button
                type="submit"
                className="w-full md:w-auto flex items-center gap-2 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg px-6 py-3 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Submit Request
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;