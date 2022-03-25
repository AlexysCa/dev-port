import Nav from "../Nav";

function Header(props) {

    return (
        <header>
            <section>
                <h1>Alexys Carrasquillo</h1>
            </section>
            <Nav
            navSections={props.navSections}
            setCurrentSection={props.setCurrentSection}
            currentSection={props.currentSection} ></Nav>
        </header>
    )
};

export default Header;