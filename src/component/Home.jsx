import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav2 from './Nav2'
import Main from './Main'
import Service1 from './Service1'
import About from './About'
import Process from './Process'
import Contact  from "./Contact";
import Footer from "./Footer";
import WelcomePrompt from "./WelcomePrompt";
function HeadBar() {
  return (
    <div>
<Nav2/>

    <Router>
       
      <Routes>
         <Route path="/" element={<Main/>} />
        <Route path="/home" element={<Main/>} />
        <Route path="/service" element={<Service1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default HeadBar;
