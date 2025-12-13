// import React from "react";

// const features = [
//   { symbol: "✔️", text: "NABL Accredited Laboratory" },
//   { symbol: "⭐", text: "ISO 9001:2015 Certified" },
//   { symbol: "🏢", text: "BIS Approved Testing Center" },
//   { symbol: "👥", text: "Trained & Expert Team" },
//   { symbol: "🔬", text: "Modern Equipment" },
//   { symbol: "⏱️", text: "Quick Turnaround Time" },
// ];

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative py-24 bg-linear-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
//     >
//       {/* Animated background blobs */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-ping"></div>
//       <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-xl p-8 animate-fadeIn">
//             <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
//               About Us
//             </span>
//             <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Trusted Partner in
//               <span className="text-blue-600"> Quality Assurance</span>
//             </h2>

//             <p className="text-gray-700 text-lg mb-6">
//               Minu Quantity and Testing Laboratory has been at the forefront of
//               wood product testing for over 15 years. Our state-of-the-art
//               facility and expert team ensure accurate, reliable, and timely
//               testing services for manufacturers, exporters, and
//               quality-conscious businesses.
//             </p>

//             <p className="text-gray-700 mb-8">
//               We are committed to maintaining the highest standards of testing
//               excellence, helping our clients meet regulatory requirements and
//               deliver quality products to their customers.
//             </p>

//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {features.map(({ symbol, text }) => (
//                 <div
//                   key={text}
//                   className="flex items-center gap-3 bg-white rounded-lg shadow-md p-3 hover:shadow-xl hover:scale-105 transition-transform duration-300"
//                 >
//                   <span className="text-blue-600 text-xl">{symbol}</span>
//                   <span className="text-gray-800 font-medium">{text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-2 gap-6">
//             <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-lg border text-center transform hover:scale-105 transition duration-300">
//               <span className="text-4xl">🏆</span>
//               <span className="font-display text-4xl font-bold text-gray-900 block mt-2">
//                 15+
//               </span>
//               <span className="text-gray-600">Years of Excellence</span>
//             </div>

//             <div className="bg-linear-to-br from-green-100 to-green-50 rounded-2xl p-8 shadow-lg border text-center transform hover:scale-105 transition duration-300">
//               <span className="text-4xl">🤝</span>
//               <span className="font-display text-4xl font-bold text-gray-900 block mt-2">
//                 500+
//               </span>
//               <span className="text-gray-600">Satisfied Clients</span>
//             </div>

//             <div className="bg-linear-to-br from-purple-100 to-purple-50 rounded-2xl p-8 shadow-lg border text-center transform hover:scale-105 transition duration-300">
//               <span className="text-4xl">📊</span>
//               <span className="font-display text-4xl font-bold text-gray-900 block mt-2">
//                 50+
//               </span>
//               <span className="text-gray-600">Test Parameters</span>
//             </div>

//             <div className="bg-blue-700 rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition duration-300">
//               <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
//                 <span className="text-white text-xl">✔</span>
//               </div>
//               <span className="font-display text-4xl font-bold text-white block">
//                 99.9%
//               </span>
//               <span className="text-white/80">Accuracy Rate</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";

const features = [
  { symbol: "✔️", text: "NABL Accredited Laboratory" },
  { symbol: "⭐", text: "ISO 9001:2015 Certified" },
  { symbol: "🏢", text: "BIS Approved Testing Center" },
  { symbol: "👥", text: "Trained & Expert Team" },
  { symbol: "🔬", text: "Modern Equipment" },
  { symbol: "⏱️", text: "Quick Turnaround Time" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 overflow-hidden text-white"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 animate-fade-up">
            <span className="inline-block text-yellow-200 font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Trusted Partner in
              <span className="text-yellow-200"> Quality Assurance</span>
            </h2>

            <p className="text-white/90 text-lg mb-6">
              Minu Quantity and Testing Laboratory has been at the forefront of
              wood product testing for over 15 years. Our state-of-the-art
              facility and expert team ensure accurate, reliable, and timely
              testing services for manufacturers, exporters, and
              quality-conscious businesses.
            </p>

            <p className="text-white/80 mb-8">
              We are committed to maintaining the highest standards of testing
              excellence, helping our clients meet regulatory requirements and
              deliver quality products to their customers.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map(({ symbol, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 bg-white/10 rounded-lg shadow-md p-3 hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-yellow-200 text-xl">{symbol}</span>
                  <span className="text-white font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-200 to-red-100 rounded-2xl p-8 shadow-lg text-center hover:scale-105 transition duration-300">
              <span className="text-4xl">🏆</span>
              <span className="font-display text-4xl font-bold block mt-2 text-black">
                15+
              </span>
              <span className="text-black/70">Years of Excellence</span>
            </div>

            <div className="bg-gradient-to-br from-pink-200 to-pink-100 rounded-2xl p-8 shadow-lg text-center hover:scale-105 transition duration-300">
              <span className="text-4xl">🤝</span>
              <span className="font-display text-4xl font-bold block mt-2 text-black">
                500+
              </span>
              <span className="text-black/70">Satisfied Clients</span>
            </div>

            <div className="bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-2xl p-8 shadow-lg text-center hover:scale-105 transition duration-300">
              <span className="text-4xl">📊</span>
              <span className="font-display text-4xl font-bold block mt-2 text-black">
                50+
              </span>
              <span className="text-black/70">Test Parameters</span>
            </div>

            {/* <div className="bg-red-700 rounded-2xl p-8 shadow-lg text-center hover:scale-105 transition duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
                <span className="text-white text-xl">✔</span>
              </div>
              <span className="font-display text-4xl font-bold text-white block">
                99.9%
              </span>
              <span className="text-white/80">Accuracy Rate</span>
            </div> */}

            {/* Accuracy Rate Card */}
            <div className="bg-linear-to-br from-red-400 via-pink-400 to-purple-400 rounded-2xl p-8 shadow-lg text-center hover:scale-105 transition duration-300 animate-fade-up delay-300">
              <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
                <span className="text-black text-xl font-bold">✔</span>
              </div>
              <span className="font-display text-4xl font-bold text-white block">
                99.9%
              </span>
              <span className="text-white/90">Accuracy Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;