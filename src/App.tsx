import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mycard from "./components/Mycard.jsx";
import MyCarousel from "./components/MyCarousel.jsx";
import CustomeDesign from "./components/CustomeDesign.jsx";
import CustomeAccordion from "./components/CustomeAccordion.jsx";
import MyNavbar from "./components/MyNavbar.jsx";
import Contact from './components/footer-section/Contact.jsx'
import DreamPlan from './components/DreamPlan.jsx';
import Courses from './components/courses/Courses.jsx'
function App() {
  return (
    <>
      <MyNavbar />
      <MyCarousel />

      <Mycard />

     
<DreamPlan/>
      <Contact/>
      {/* <CustomeAccordion /> */}


<Courses/>
      {/* <CustomeDesign /> */}


    </>
  );
}

export default App;
