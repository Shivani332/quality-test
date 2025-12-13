// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav2 from "./component/Nav2";
// import Main from "./component/Main";
// import Service1 from "./component/Service1";
// import About from "./component/About";
// import Process from "./component/Process";
// import Contact from "./component/Contact";
// import Footer from "./component/Footer";

// function App() {
//   return (
//     <div>

//     <Nav2 />
//     <Main/>
//     <Service1/>
//     <About/>
//     <Process/>
//     <Router>
//       <Routes>
//         {/* <Route path="/home" element={<Main />} /> */}
//         <Route path="/service" element={<Service1 />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/process" element={<Process />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import HeadBar from './component/Home'


function App() {
  return (
    <div>
     <HeadBar/>
    </div>
  )
}

export default App

