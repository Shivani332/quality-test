
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import heroImage from "../assets/hero-lab.jpg";
import Service1 from "./Service1";
import About from "./About";
import Process from "./Process";
import Contact from "./Contact";

const Main = () => {
  return (
    <div>
    <section
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Wood testing laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-bounce" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Hero Heading */}
          <h1
            className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Precision Testing for
            <span className="block text-red-400">Wood Products</span>
          </h1>

          {/* Hero Subtext */}
          <p
            className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Trusted laboratory for comprehensive quality testing of plywood, furniture, timber,
            and all wooden products. Ensuring safety and compliance with international standards.
          </p>

          {/* Buttons */}
          <div
            className="flex gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <button className="group px-6 py-3 bg-white text-black text-lg font-semibold rounded-lg shadow-lg hover:bg-red-400 hover:text-white transition-all flex items-center gap-2">
              Request Testing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-6 py-3 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all">
              View Services
            </button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 text-white font-bold gap-6 max-w-lg animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center hover:scale-105 transition-transform">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Award className="w-5 h-5 text-red-400" />
                <span className="font-display text-3xl font-bold">15+</span>
              </div>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>

            <div className="text-center border-x border-gray-500 px-4 hover:scale-105 transition-transform">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Shield className="w-5 h-5 text-red-400" />
                <span className="font-display text-3xl font-bold">5000+</span>
              </div>
              <p className="text-sm text-gray-300">Tests Conducted</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="font-display text-3xl font-bold">48h</span>
              </div>
              <p className="text-sm text-gray-300">Quick Reports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Service1/>
    <About/>
    <Process/>
    <Contact/>
    </div>
    
  );
};

export default Main;