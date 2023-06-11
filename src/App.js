import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./Components/Header";
import AppHero from "./Components/Hero";
import AppAbout from "./Components/About";
import AppServices from "./Components/Services";
import AppWorks from "./Components/Works";
import AppTeams from "./Components/Teams";
import AppTestimonials from "./Components/Testimonials";
import AppPricing from "./Components/Pricing";
import AppBlog from "./Components/Blog";
import AppContact from "./Components/Contact";
import AppFooter from "./Components/Footer";
// commenrs
function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader></AppHeader>
      </header>
      <main>
        <AppHero></AppHero>
        <AppAbout></AppAbout>
        <AppServices></AppServices>
        <AppWorks></AppWorks>
        <AppTeams></AppTeams>
        <AppTestimonials></AppTestimonials>
        <AppPricing></AppPricing>
        <AppBlog></AppBlog>
        <AppContact></AppContact>
      </main>
      <footer id="footer">
        <AppFooter></AppFooter>
      </footer>
    </div>
  );
}

export default App;

{
  /* <Typed strings={[
  "Zackary Ali Hassan","Abshir Muse Ahmed","Abdi-jabar Jama' Mohamed"]}typeSpeed={40} backSpeed={50} loop
/> */
}
// import Typed from "react-typed";
