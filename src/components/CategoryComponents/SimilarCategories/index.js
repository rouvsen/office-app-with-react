import './index.css';

function SimilarCategories() {
    return (
            <section className="similarcategories-section-row">
                <div className="container">
                    <div className="similarcategories-section-wrapper">

                        <div className='similarcategories-section-top'>
                            <h2>Oxşar kateqoriyalar</h2>
                        </div>
                        <div className='similarcategories-section-bottom'>
                            <div className='similarcategory-wrapper'>
                                <a href=''>
                                    <div className='similarcategory-image-wrapper'>
                                        <img src='https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_1200x630_crop_center-center_82_none/Harriet-Books-SEO.png?mtime=1619639579' />
                                    </div>
                                    <div className='similarcategory-title-wrapper'>
                                        <h3>Kitablar</h3>
                                    </div>
                                </a>
                            </div>
                            <div className='similarcategory-wrapper'>
                                <a href=''>
                                    <div className='similarcategory-image-wrapper'>
                                        <img src='https://officemebel.com/wp-content/uploads/2019/01/office_mebel_com_blog_2_1200.jpg' />
                                    </div>
                                    <div className='similarcategory-title-wrapper'>
                                        <h3>Ofis mebelləri</h3>
                                    </div>
                                </a>
                            </div>
                            <div className='similarcategory-wrapper'>
                                <a href=''>
                                    <div className='similarcategory-image-wrapper'>
                                        <img src='https://www.xrxtechnologies.co.ke/wp-content/uploads/2023/05/RutSDpEeh9.jpg' />
                                    </div>
                                    <div className='similarcategory-title-wrapper'>
                                        <h3>Texnika</h3>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    )

}

export default SimilarCategories;