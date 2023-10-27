import './index.css';

function Header() {
    return (
            <section className="categories-section-row">
                    <div className="categories-section-wrapper">
                        <div className="category-section-category">
                            <div className="category-section-image-wrapper">
                                <div className="category-section-image"></div>
                            </div>
                            <div className="category-section-title-wrapper">
                                <h2>Ofis ləvazimatları</h2>
                            </div>
                        </div>
                        <div className="category-section-category">
                            <div className="category-section-image-wrapper">
                                <div className="category-section-image"></div>
                            </div>
                            <div className="category-section-title-wrapper">
                                <h2>Kitablar</h2>
                            </div>
                        </div>
                        <div className="category-section-category">
                            <div className="category-section-image-wrapper">
                                <div className="category-section-image"></div>
                            </div>
                            <div className="category-section-title-wrapper">
                                <h2>Ofis mebelləri</h2>
                            </div>
                        </div>
                        <div className="category-section-category">
                            <div className="category-section-image-wrapper">
                                <div className="category-section-image"></div>
                            </div>
                            <div className="category-section-title-wrapper">
                                <h2>Texnika</h2>
                            </div>
                        </div>
                    </div>
            </section>
    )

}

export default Header;