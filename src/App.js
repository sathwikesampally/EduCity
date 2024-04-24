
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import Testimonials from './Components/Testimonials/Testimonials';
import Title from './Components/Title/Title';
import Footer from './Components/Footer/Footer';



function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer"></Title>
      <Programs></Programs>
      <About ></About>
      <Title subTitle="Gallery" title="Campus Photos"></Title>
      <Campus></Campus>
      <Title subTitle="Testimonials" title="What a Student says"></Title>
      <Testimonials></Testimonials>
      <Title subTitle="Contact us" title="Get in touch"></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div>
      
    </div>
  );
}

export default App;
