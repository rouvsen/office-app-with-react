import './index.css';

import React, { useState } from "react";

const products = [
  { id: 1, name: "Ürün A", price: 100 },
  { id: 2, name: "Ürün B", price: 150 },
  { id: 3, name: "Ürün C", price: 50 },
];

function CategoryProducts() {

    const [sort, setSort] = useState("");

    const handleChange = (e) => {
        setSort(e.target.value);
    };

    const sortProducts = (products, sort) => {
        const sortedProducts = [...products];
        if (sort === "artan") {
        sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sort === "azalan") {
        sortedProducts.sort((a, b) => b.price - a.price);
        }
        return sortedProducts;
    };
    
    return (
            <section className="categoryproducts-section-row">
                <div className="container">
                    <div className="categoryproducts-section-wrapper">

                        <div className='categoryproducts-section-head'>
                            <div className='categoryproducts-section-head-search'>
                                <div>
                                    <i className='bi bi-search'></i>
                                </div>
                                <div>
                                    <input className='categoryproducts-search-input' type='text' placeholder='Axtardığınız məhsulu qeyd edin' />
                                </div>
                            </div>
                            <div className='categoryproducts-section-head-filter'>
                                <div>Qiymət:</div>
                                <div>
                                    <select value={sort} onChange={handleChange}>
                                        <option value="">Seçin</option>
                                        <option value="artan">Artan</option>
                                        <option value="azalan">Azalan</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='categoryproducts-section-body'>
                            <div className='categoryproducts-section-body-products-wrapper'>
                                <ul className='categoryproducts-section-body-product-list'>
                                    <li className='categoryproducts-section-product'>
                                        <div className='categoryproducts-section-product-img-wrapper'>
                                            <img src='https://www.dollarama.com/images/3020600_0_L.jpg' />
                                        </div>
                                        <div className='categoryproducts-section-product-details-wrapper'>
                                            <h3 className='categoryproducts-section-product-title'>Məhsulun adı</h3>
                                            <div className='categoryproducts-section-product-price-wrapper'>
                                                <div>
                                                    <span className='categoryproducts-section-product-marka'>Marka</span>
                                                </div>
                                                <div>
                                                    <span className='categoryproducts-section-product-price'>20.00</span>
                                                    <span>AZN</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='categoryproducts-section-product'>
                                        <div className='categoryproducts-section-product-img-wrapper'>
                                            <img src='https://www.dollarama.com/images/3020600_0_L.jpg' />
                                        </div>
                                        <div className='categoryproducts-section-product-details-wrapper'>
                                            <h3 className='categoryproducts-section-product-title'>Məhsulun adı</h3>
                                            <div className='categoryproducts-section-product-price-wrapper'>
                                                <div>
                                                    <span className='categoryproducts-section-product-marka'>Marka</span>
                                                </div>
                                                <div>
                                                    <span className='categoryproducts-section-product-price'>20.00</span>
                                                    <span>AZN</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='categoryproducts-section-product'>
                                        <div className='categoryproducts-section-product-img-wrapper'>
                                            <img src='https://www.dollarama.com/images/3020600_0_L.jpg' />
                                        </div>
                                        <div className='categoryproducts-section-product-details-wrapper'>
                                            <h3 className='categoryproducts-section-product-title'>Məhsulun adı</h3>
                                            <div className='categoryproducts-section-product-price-wrapper'>
                                                <div>
                                                    <span className='categoryproducts-section-product-marka'>Marka</span>
                                                </div>
                                                <div>
                                                    <span className='categoryproducts-section-product-price'>20.00</span>
                                                    <span>AZN</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='categoryproducts-section-product'>
                                        <div className='categoryproducts-section-product-img-wrapper'>
                                            <img src='https://www.dollarama.com/images/3020600_0_L.jpg' />
                                        </div>
                                        <div className='categoryproducts-section-product-details-wrapper'>
                                            <h3 className='categoryproducts-section-product-title'>Məhsulun adı</h3>
                                            <div className='categoryproducts-section-product-price-wrapper'>
                                                <div>
                                                    <span className='categoryproducts-section-product-marka'>Marka</span>
                                                </div>
                                                <div>
                                                    <span className='categoryproducts-section-product-price'>20.00</span>
                                                    <span>AZN</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='categoryproducts-section-product'>
                                        <div className='categoryproducts-section-product-img-wrapper'>
                                            <img src='https://www.dollarama.com/images/3020600_0_L.jpg' />
                                        </div>
                                        <div className='categoryproducts-section-product-details-wrapper'>
                                            <h3 className='categoryproducts-section-product-title'>Məhsulun adı</h3>
                                            <div className='categoryproducts-section-product-price-wrapper'>
                                                <div>
                                                    <span className='categoryproducts-section-product-marka'>Marka</span>
                                                </div>
                                                <div>
                                                    <span className='categoryproducts-section-product-price'>20.00</span>
                                                    <span>AZN</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='categoryproducts-section-product'>
                                        <div className='categoryproducts-section-product-img-wrapper'>
                                            <img src='https://www.dollarama.com/images/3020600_0_L.jpg' />
                                        </div>
                                        <div className='categoryproducts-section-product-details-wrapper'>
                                            <h3 className='categoryproducts-section-product-title'>Məhsulun adı</h3>
                                            <div className='categoryproducts-section-product-price-wrapper'>
                                                <div>
                                                    <span className='categoryproducts-section-product-marka'>Marka</span>
                                                </div>
                                                <div>
                                                    <span className='categoryproducts-section-product-price'>20.00</span>
                                                    <span>AZN</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    )

}

export default CategoryProducts;


//       <ul>
//         {/* Ürünleri fiyata göre sıralayarak listele */}
//         {sortProducts(products, sort).map((product) => (
//           <li key={product.id}>
//             {product.name} - {product.price} TL
//           </li>
//         ))}
//       </ul>

