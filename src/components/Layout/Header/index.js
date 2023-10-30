import LoginModal from './LoginModal'

import React, { useState } from "react";
import './index.css';
import SidePanel from './SidePanel';

function Header() {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => { setShowPanel(!showPanel); };

    return (
      <header>
        <div className="header-row">
          <div className="container">
            <div className="header-wrapper">
              <div className="header-left">
                <div className="header-left-logo-wrapper">
                  <a className="header-left-logo" href="#">
                    <img className="header-left-logo" src="../../../Logo.svg" /> <span>Logo</span>
                  </a>
                </div>
              </div>
              <div className="header-right">
                <ul className="header-right-links">
                  <li className="header-right-link">
                    <a href="/">Əsas</a>
                  </li>
                  <li className="header-right-link prods-with-arrow">
                    <a href="#">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1775 15.5525C11.9978 15.7322 11.7541 15.8331 11.5 15.8331C11.2459 15.8331 11.0022 15.7322 10.8225 15.5525L5.40116 10.1312C5.30963 10.0428 5.23663 9.93708 5.1864 9.82016C5.13618 9.70324 5.10974 9.57749 5.10863 9.45024C5.10753 9.323 5.13177 9.1968 5.17996 9.07903C5.22815 8.96125 5.29931 8.85425 5.38929 8.76427C5.47927 8.67429 5.58627 8.60313 5.70404 8.55495C5.82182 8.50676 5.94801 8.48251 6.07526 8.48362C6.2025 8.48472 6.32826 8.51116 6.44518 8.56139C6.5621 8.61161 6.66785 8.68462 6.75625 8.77615L11.5 13.5199L16.2437 8.77615C16.4245 8.60158 16.6666 8.50499 16.9178 8.50717C17.1691 8.50935 17.4095 8.61014 17.5872 8.78782C17.7648 8.96551 17.8656 9.20587 17.8678 9.45714C17.87 9.70841 17.7734 9.95049 17.5988 10.1312L12.1775 15.5525Z" fill="#7C8794"/>
                        </svg>
                      </div>
                      <div>
                        Məhsullar
                      </div>
                    </a>
                  </li>
                  <li className="header-right-link">
                    <a href="/officeSupplies">Korporativ satış</a>
                  </li>
                  <li className="header-right-link">
                    <a href="/aboutUs">Haqqımızda</a>
                  </li>
                  <li className="header-right-link">
                    <a href="/contactUs">Əlaqə</a>
                  </li>
                  <li className="header-right-link header-right-link-menu">
                    <a href="#" onClick={togglePanel}>Menu</a>
                  </li>
                  <li className="header-right-link header-right-link-login">
                    <a href="#" onClick={handleShowModal}>
                      <img src="../../../Vector.svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <LoginModal show={showModal} onClose={handleCloseModal} />
        <SidePanel showPanel={showPanel} setShowPanel={setShowPanel} />
      </header>
    );
}
  
export default Header;