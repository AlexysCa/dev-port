import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaSquarespace,
} from "react-icons/fa";

function Footer() {

return (
    <footer>
        <section className="footer-container">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/alexys-carrasquillo-a310a9161/">
                        <FaLinkedin size={30} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/AlexysCa">
                        <FaGithub size={30} />
                        </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lxy.crsql/">
                        <FaInstagram size={30} />
                        </a>
                </li>
                <li>
                    <a href="https://alexyscarrasquillo.com/">
                        <FaSquarespace size={30} />
                    </a>
                </li>
                <li>
                    <h2>Made by Alexys &copy; 2026.</h2>
                </li>
            </ul>
        </section>
    </footer>
)

}

export default Footer;