import { FileText, FlaskConical, ClipboardCheck, Send } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Sample Submission",
    description:
      "Submit your wood product samples along with the required test specifications and documentation.",
  },
  {
    icon: FlaskConical,
    step: "02",
    title: "Laboratory Testing",
    description:
      "Our expert team conducts thorough testing using calibrated equipment following standard protocols.",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Analysis & Review",
    description:
      "Test results are analyzed, reviewed by senior scientists, and quality checked for accuracy.",
  },
  {
    icon: Send,
    step: "04",
    title: "Report Delivery",
    description:
      "Receive detailed test reports with certifications delivered digitally and in hard copy format.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="relative py-24 bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 text-white overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block text-yellow-200 font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Simple Testing Process
          </h2>
          <p className="text-white/80 text-lg">
            Our streamlined process ensures quick turnaround while maintaining the highest
            standards of testing accuracy.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative text-center group transform transition-transform duration-500 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connector line (horizontal between steps on large screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-24 h-0.5 bg-white/40"></div>
              )}

              <div className="relative z-10">
                {/* Icon Circle */}
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300 shadow-lg">
                  <item.icon className="w-10 h-10 text-yellow-200 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Step Number */}
                <span className="text-yellow-200 font-bold text-sm mb-2 block">
                  Step {item.step}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl font-bold mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;