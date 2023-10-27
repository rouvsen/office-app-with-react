import './index.css';

function NewProds() {
    return (
            <section className="newprods-section-row">
                <div className="container">
                    <div className="newprods-section-wrapper">

                        <div className="newprods-section-left">
                            <div className="newprods-section-left-title-wrapper">
                                <h2>ƏN YENİ MƏHSULLAR</h2>
                            </div>
                            <div className="newprods-section-left-svg-row-wrapper">
                                <img className="svg-row" src="../../../../svg-row.svg" />
                            </div>
                            <div className="newprods-section-left-description-wrapper">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="newprods-section-left-primary-btn-wrapper">
                                <a href="#">Get started</a>
                            </div>
                        </div>

                        <div className="newprods-section-right">
                            <div className="newprods-section-right-image-wrapper">
                                <img src="https://nomart.fi/wp-content/uploads/td_cube_tape_dispenser_with_tape-365x456.jpg" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    )

}

export default NewProds;