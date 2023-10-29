import './index.css'

function DeliveryMain() {


    return (
        <section className='deliverymain-section-row'>
                <div className='deliverymain-section-wrapper'>

                    <div className='deliverymain-section-top'>
                        <div className='container'>
                            <h2>ÇATDIRILMA</h2>
                        </div>
                        <div className='deliverymain-section-top-backimage'>
                            <img src='delivery-backgroundimage.png' />
                        </div>
                    </div>

                    <div className='deliverymain-section-bottom'>
                        <div className='deliverymain-section-bottom-layer-wrapper'>
                            <div className='deliverymain-section-bottom-layer-left'>
                                <span className='layer-left-span-val'>1</span>
                            </div>
                            <div className='deliverymain-section-bottom-layer-right'>
                                <h5>Seçdiyiniz məhsulu bəyənilənlərə əlavə edin.</h5>
                            </div>
                        </div>
                        <div className='deliverymain-section-bottom-layer-wrapper'>
                            <div className='deliverymain-section-bottom-layer-left'>
                                <span className='layer-left-span-val'>2</span>
                            </div>
                            <div className='deliverymain-section-bottom-layer-right'>
                                <h5>SEÇİMLƏRİNİZİ TAMAMLADIQDAN SONRA BƏYƏNİLƏNLƏR HİSSƏSİNDƏ TƏSDİQ EDİN.</h5>
                            </div>
                        </div>
                        <div className='deliverymain-section-bottom-layer-wrapper'>
                            <div className='deliverymain-section-bottom-layer-left'>
                                <span>3</span>
                            </div>
                            <div className='deliverymain-section-bottom-layer-right'>
                                <h5>SİFARİŞİNİZİ TƏSDİQ ETDİKDƏN SONRA TEZLİKLƏ SİZİNLƏ ƏLAQƏ SAXLAYACAĞIQ.</h5>
                            </div>
                        </div>
                    </div>

                </div>
        </section>
    )
}

export default DeliveryMain