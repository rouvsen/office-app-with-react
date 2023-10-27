import './index.css';

// React kodunuz
import React, { useState } from "react";

// Örnek ürünler dizisi
const products = [
  { id: 1, name: "Ürün A", price: 100 },
  { id: 2, name: "Ürün B", price: 150 },
  { id: 3, name: "Ürün C", price: 50 },
];

function CategoryProducts() {
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
                                    <input type='text' placeholder='Axtardığınız məhsulu qeyd edin' />
                                </div>
                            </div>
                            <div className='categoryproducts-section-head-filter'>
                                <div>Qiymət:</div>
                                <div>
                                    Azalan <i className='bi bi-arrow-bar-down'></i>
                                </div>
                            </div>
                        </div>

                        <div className='categoryproducts-section-body'>
                            <div className='categoryproducts-section-body-products-wrapper'>
                                <div className='categoryproducts-section-body-product'>
                                    <div>
                                        <img src='https://www.dollarama.com/images/3020600_0_L.jpg' />
                                    </div>
                                    <div>
                                        <h3>Məhsulun adı</h3>
                                        <div>
                                            <span>20.00</span><span>AZN</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    )

}

export default CategoryProducts;



// function App() {
//   // Seçilen sıralama yöntemini tutacak state
//   const [sort, setSort] = useState("");

//   // Seçim değiştiğinde state'i güncelleyecek fonksiyon
//   const handleChange = (e) => {
//     setSort(e.target.value);
//   };

//   // Ürünleri fiyata göre sıralayacak fonksiyon
//   const sortProducts = (products, sort) => {
//     // Ürünler dizisini kopyalayarak yeni bir dizi oluştur
//     const sortedProducts = [...products];
//     // Sıralama yöntemine göre diziyi sırala
//     if (sort === "artan") {
//       // Fiyatı artan şekilde sırala
//       sortedProducts.sort((a, b) => a.price - b.price);
//     } else if (sort === "azalan") {
//       // Fiyatı azalan şekilde sırala
//       sortedProducts.sort((a, b) => b.price - a.price);
//     }
//     // Sıralanmış diziyi döndür
//     return sortedProducts;
//   };

//   return (
//     <div className="App">
//       <h1>Ürünler</h1>
//       <p>Fiyata göre sıralama yapmak için seçim yapın:</p>
//       <select value={sort} onChange={handleChange}>
//         <option value="">Seçiniz</option>
//         <option value="artan">Artan</option>
//         <option value="azalan">Azalan</option>
//       </select>
//       <ul>
//         {/* Ürünleri fiyata göre sıralayarak listele */}
//         {sortProducts(products, sort).map((product) => (
//           <li key={product.id}>
//             {product.name} - {product.price} TL
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

