import { Footer, Navbar, Rank } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const ranks = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <Rank />
      <div className="gradient-04 z-0" />
      
    </div>
    
    <div className="relative">
      
      <div className="gradient-04 z-0" />
      
    </div>
    <Footer />
  </div>
);

export default ranks;