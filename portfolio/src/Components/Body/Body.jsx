import { Navbar, Header, AboutMe, Portfolio, Cv, Skills, Footer, ToTopBtn } from '../index.js';

import './Body.css';

export const Body = () => {
  return <div>
    <Navbar />
    <Header />
    {/* About Me*/}
    <div id='likes-cv'>
      <AboutMe />
      <Portfolio />
      <Cv />
    </div>
    <div>
      <hr className="loc-hr" />
    </div>
    {/* Skills and footer */}
    <div id='contact-footer'>
      <Skills />
      <Footer />
    </div>
    <ToTopBtn />
  </div>
}
