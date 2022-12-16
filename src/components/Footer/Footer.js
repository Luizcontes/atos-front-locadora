import './footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">

                <div className="footer-links">
                    <span><b>Informações</b></span>
                    <a href="/" className="link">Contactos</a>
                    <a href="/" className="link">Condicoes legais</a>
                    <a href="/" className="link">Politica de privacidade</a>
                    <a href="/" className="link">Politica de cookies</a>
                    <a href="/" className="link">Gerir preferencias</a>
                    <a href="/" className="link">Registo empresas</a>
                    <a href="/" className="link">Quem somos?</a>
                    <a href="/" className="link">Careers</a>
                </div>

                <div className="social-media">
                    <span><b>Siga-nos em</b></span>

                    <div className="social-icons">
                        <a href="/">
                            <img
                            className="icon"
                            alt=""
                            src="/img/icons-facebook.svg"
                            />
                        </a>

                        <a href="/">
                            <img
                                className="icon"
                                alt=""
                                src="/img/icons-twitter.svg"
                            />
                        </a>

                        <a href="/">
                            <img
                                className="icon"
                                alt=""
                                src="/img/icons-pinterest.svg"
                            />
                        </a>

                        <a href="/">
                            <img
                                className="icon"
                                alt=""
                                src="/img/icons-instagram.svg"
                            />
                        </a>
                    </div>
                </div>



                <div className="language">
                    <span><b>Selecione um país</b></span>

                    <div className="input-pais">
                        <img
                        className="icon"
                        alt=""
                        src="/img/icon-flag-portugal.svg"
                        />
                        <input type="text" />
                    </div>
                </div>

            </div>
        </>
        
    )
} 

export default Footer;