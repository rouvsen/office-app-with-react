import './index.css';

function Main() {
    return (
      <header>
        <div className="main-row">
          <div className="container">
            <div className="main-wrapper">
              <div className="main-wrapper-left">
                <h2 className="main-wrapper-left-header">Yüksək keyfiyyətli məhsullar</h2>
                <div className="main-wrapper-left-input-section">
                    <div>
                        <i className="bi bi-search"></i>
                    </div>
                    <div>
                        <input type="text" placeholder="Axtardığınız məhsulu qeyd edin" />
                    </div>
                </div>
              </div>
              <div className="main-wrapper-right">
                <div className="main-wrapper-image">
                    <img src="../../../fake-main-image.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="main-row-background-images-wrapper">
            <div><img src="../../../main-sec-images/left.png" /></div>
            <div><img src="../../../main-sec-images/center-top.png" /></div>
            <div><img src="../../../main-sec-images/center-bottom.png" /></div>
            <div><img src="../../../main-sec-images/right-top.svg" /></div>
            <div><img src="../../../main-sec-images/right-bottom.svg" /></div>
          </div>
        </div>
      </header>
    );
}
  
export default Main;