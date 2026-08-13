import Nav from "../Nav";

function Header({ navSections, setCurrentSection, currentSection }) { return ( <header> <section className="header-brand"> <h1>Alexys Carrasquillo</h1> <p>Full Stack Web Developer | Technology Operations | Digital Platforms</p> </section> <Nav navSections={navSections} setCurrentSection={setCurrentSection} currentSection={currentSection} /> </header> ); }

export default Header;