
import './App.css';
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievement from "./components/Achievement";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
    <Navigation/>
    <Home/>
    <About/>
    <Achievement/>
    <ContactForm/>
    <Footer/>
 
    </div>
  );
}

export default App;
