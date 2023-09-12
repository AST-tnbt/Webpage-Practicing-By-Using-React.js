import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Comments from "./Components/Comments/Comments";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Message from "./Components/Messenge/Message";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import Services from "./Components/Services/Services";
import Skill from "./Components/Skills/Skill";
import Stats from "./Components/Stats/Stats";
import Works from "./Components/Works/Works";

export default function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Skill />
      <Stats />
      <Works />
      <Services />
      <Comments />
      <Message />
      <Footer />
      <ScrollButton />
    </>
  );
}
