import "./App.css"
import Header from "./sections/Header/Header"
import Hero from "./sections/Hero/Hero";
import Container from "./components/Container/Container";
import Footer from "./sections/Footer/Footer";
import MostPopular from "./sections/MostPopular/MostPopular";
import GamingLibrary from "./sections/GamingLibrary/GamingLibrary";
import { Route, Router, Routes } from "react-router-dom";
function App() {
 
  return (
  <>
    
  <Header />
  <Container>
   <Hero/>
   <MostPopular />
   <GamingLibrary />
   </Container>
  <Footer />
  </>
    
  )

}

export default App;

// import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
//  <Router>
//   <Header />
//  <Container>
//   <Routes>
//    <Route path="/" element={<Hero />}>
//   <MostPopular  />
//   <GamingLibrary />
//   </Routes>
  
//   </Container>
//  <Footer />
//  </Router>
 

