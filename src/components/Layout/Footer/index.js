import './index.css';

function Footer() {
    return (
            <section className="footer-section-row">
                <div className="container">
                    <div className="footer-section-wrapper">
                        <div className="footer-section-left">
                            <div className="footer-section-logo-wrapper">
                                <div>
                                    <img src="../../../Logo.svg" />
                                </div>
                                <div>
                                    <span>logo</span>
                                </div>
                            </div>
                            <div className="footer-section-address-wrapper">
                                <span>Ünvan:</span>
                                <span>A.Havicode kucesi 144B k. Axundov yani Sako mr 7.</span>
                            </div>
                            <div className="footer-section-webpages-wrapper">
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-youtube"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-twitter"></i>
                            </div>
                            <div className="footer-section-copyright-wrapper">
                                <span>©2023 Ofis prototip </span>
                            </div>
                        </div>
                        <div className="footer-section-center">
                            <div className="footer-section-center-information-wrapper">
                                <h4>Məlumat</h4>
                                <ul>
                                    <li><a href="#">Əsas</a></li>
                                    <li><a href="#">Məhsulllar</a></li>
                                    <li><a href="#">Mağazalarımız</a></li>
                                    <li><a href="#">Korporativ satış</a></li>
                                    <li><a href="#">Haqqımızda</a></li>
                                    <li><a href="#">Əlaqə</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-section-right">
                            <div className="footer-section-right-information-wrapper">
                                    <h4>Əlaqə</h4>
                                    <div className="footer-section-right-information-phone">
                                        <a href="tel:+994998851377">
                                            <span>Phone</span>
                                            <span><i>+994 99 885 13 77</i></span>
                                        </a>
                                    </div>
                                    <div className="footer-section-right-information-email">
                                        <a href="mailto:hello@elliette.com">
                                            <span>Email</span>
                                            <span><i>hello@elliette.com</i></span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )

}

export default Footer;