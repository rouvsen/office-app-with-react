import './index.css';

function OurDetails() {

  return (
    <section className='ourdetails-main-section'>
        <div className='container'>
            <div className='ourdetails-main-section-wrapper'>
                <div className='ourdetails-main-section-phone-wrapper'>
                    <h5>Telefon:</h5>
                    <span>+994 12 345 67 89</span>
                </div>
                <div className='ourdetails-main-section-email-wrapper'>
                    <h5>E-mail:</h5>
                    <span>asdfg@gmail.com</span>
                </div>
                <div className='ourdetails-main-section-webpages-wrapper'>
                    <a href='#'><i className='bi bi-facebook'></i></a>
                    <a href='#'><i className='bi bi-youtube'></i></a>
                    <a href='#'><i className='bi bi-instagram'></i></a>
                    <a href='#'><i className='bi bi-twitter'></i></a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default OurDetails;
