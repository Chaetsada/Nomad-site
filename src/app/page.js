
import Features from "./Components/Features";
import Header from "./Components/Header";
import Popular from "./Components/Popular";
import Testimonial from "./Components/Testimonial";

export default function Home() {
  return ( 
      <div className="min-h-screen bg-main">
        <Header/>
        <Features/>
        <Popular />
        <Testimonial/>
      </div>
  );
}
