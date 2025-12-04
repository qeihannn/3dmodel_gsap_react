import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)


const App = () => {
    return (
    <main>
        <Navbar/>
        <Hero />
        <ProductViewer />
        
    </main>
    )
}

export default App