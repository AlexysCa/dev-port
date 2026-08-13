function ContactForm() {
    return (
        <section className="contact-container">
            <h2 className="section-title">Let's Connect</h2>

            <section className="contact-card">
                <p>
                    I'm always interested in connecting with other technology
                    professionals, developers, creative teams, and organizations
                    looking for someone who can bridge technology, creativity,
                    and business.
                </p>

                <div className="contact-links">
                    <a href="mailto:alexys.carrasquillo@gmail.com">
                        Email Me
                    </a>

                    <a
                        href="https://github.com/AlexysCa"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/alexys-carrasquillo/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </section>
        </section>
    );
}

export default ContactForm;