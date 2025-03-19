import React from "react";
import { Link } from "react-router-dom";

// Dummy Product Data (26 Products)
const products = [
  { id: 1, name: "Motorola Edge 50 Pro", image: "https://motorolain.vtexassets.com/arquivos/ids/159178/motorola-edge-50-pro-PDP-ecomm-render-color5-5-.png?v=638614765175970000", price: 19999, category: "Mobile Phones", rating: 4.5 },
  { id: 2, name: "Apple MacBook Pro", image: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg", price: 124999, category: "Laptops", rating: 4.8 },
  { id: 3, name: "Sony WH-1000XM5", image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1682757035/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/272419_jqvb9x.png?tr=w-600", price: 24999, category: "Headphones", rating: 4.7 },
  { id: 4, name: "Samsung Galaxy Watch 5", image: "https://www.unboxify.in/cdn/shop/products/61c_v6GIsjL._SL1500.jpg?v=1678648468", price: 18999, category: "Wearables", rating: 4.4 },
  { id: 5, name: "JBL Flip 6 Speaker", image: "https://cdn.moglix.com/p/BgoXien6ZDbyx-xxlarge.jpg", price: 7999, category: "Audio", rating: 4.6 },
  { id: 6, name: "Logitech G502 Mouse", image: "https://gamesncomps.com/wp-content/uploads/2022/09/1-20.jpg", price: 4999, category: "Accessories", rating: 4.5 },
  { id: 7, name: "Corsair K95 Keyboard", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYGnjUa8vWpYKcCIFalsn0HabNLRVwJaOGg&s", price: 14999, category: "Accessories", rating: 4.8 },
  { id: 8, name: "LG 4K OLED TV", image: "https://nandilathgmart.com/wp-content/uploads/2024/08/OLED55B46LA-LG-OLED-AI.jpg", price: 89999, category: "Television", rating: 4.9 },
  { id: 9, name: "Mi Power Bank 20000mAh", image: "https://www.zeepee.in/wp-content/uploads/2020/07/mi-20000-mah-powerbank.jpg", price: 2499, category: "Accessories", rating: 4.2 },
  { id: 10, name: "PlayStation 5", image: "https://gameloot.in/wp-content/uploads/2023/11/Sony-PlayStation-5-Slim-Disc-Edition-1TB-ps5-console.jpg", price: 49999, category: "Gaming", rating: 5.0 },
  { id: 11, name: "Samsung Galaxy Buds", image: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/Samsung-galaxy-buds-3-pro-reserve-silver-Buds-Back-View.png", price: 6999, category: "Audio", rating: 4.5 },
  { id: 12, name: "Apple iPad Air", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAEhnXD1v5kvmc8nFCthdDeA4ufJHkRogFug&s", price: 59999, category: "Tablets", rating: 4.7 },
  { id: 13, name: "Ring Smart Camera", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwQgns43ilkA-3OUZiN2rJm93T2yFCb-2Ug&s", price: 10999, category: "Home Security", rating: 4.4 },
  { id: 14, name: "Meta Quest 3", image: "https://media.wired.com/photos/64e901ea3c194283dd3f56a7/master/pass/Meta-Quest-3-Gear-Roundup.jpg", price: 34999, category: "Gaming", rating: 4.3 },
  { id: 15, name: "NVIDIA RTX 4090", image: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg", price: 179999, category: "Computers", rating: 4.9 },
  { id: 16, name: "Philips Smart Light", image: "https://images-cdn.ubuy.co.in/64ca81a8b58d1c7e812f103c-philips-smart-led-100-watt-a21-general.jpg", price: 2999, category: "Smart Home", rating: 4.3 },
  { id: 17, name: "Oral-B Electric Toothbrush", image: "https://cdn11.bigcommerce.com/s-xyx0x9ybhg/images/stencil/1280x1280/products/1172/7911/B07JKXSJMX.MAIN__37614.1684305375.jpg?c=2", price: 2999, category: "Personal Care", rating: 4.2 },
  { id: 18, name: "TP-Link WiFi Router", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUoN3gZnuum0LgHboNFWUJ4vLBILOnY-E2g&s", price: 4999, category: "Networking", rating: 4.5 },
  { id: 19, name: "Seagate 2TB HDD", image: "https://images.jdmagicbox.com/quickquotes/images_main/seagate-skyhawk-lite-2tb-surveillance-internal-hard-drive-hdd-3-5-inch-sata-hdd-st2000vx007-378082497-7bqav.jpg", price: 6999, category: "Storage", rating: 4.6 },
  { id: 20, name: "Canon DSLR Camera", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0g0EFI7I54OnJcgOUVo-XnULvNrfej4mgg&s", price: 45999, category: "Cameras", rating: 4.7 },
  { id: 21, name: "Bajaj Coffee Maker", image: "https://vadiraja.com/wp-content/uploads/2020/10/31-2.jpg", price: 4999, category: "Home Appliances", rating: 4.5 },
  { id: 22, name: "Nest Smart Thermostat", image: "https://www.checkatrade.com/blog/wp-content/uploads/2021/07/nest-installation-cost.jpeg", price: 12999, category: "Smart Home", rating: 4.4 },
  { id: 23, name: "XGIMI Portable Projector", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9xSiieK_yaPeQrC2skZmb9yH3A7MY4aPug&s", price: 19999, category: "Projectors", rating: 4.5 },
  { id: 24, name: "Secretlab Gaming Chair", image: "https://images.secretlab.co/turntable/tr:n-w_450/R22SW-Minecraft_02.jpg", price: 29999, category: "Furniture", rating: 4.7 },
  { id: 25, name: "Anker Wireless Charger", image: "https://m.media-amazon.com/images/I/61B0gk6vNML.jpg", price: 2499, category: "Accessories", rating: 4.4 },
  { id: 26, name: "Razer Gaming Laptop", image: "https://assets3.razerzone.com/8w_5AFm95J3zoALW7GIdLniSWU8=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh3c%2Fh0a%2F9756641558558%2Fblade18-k10-500x500.png", price: 149999, category: "Laptops", rating: 4.9 },
];

const ProductList = () => {
    return (
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Best Products</h2>
        
              {/* First Row (7 Products) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {products.slice(0, 7).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
        
              {/* Second Row (7 Products) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-6">
                {products.slice(7, 14).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
        
              {/* Third Row (7 Products) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-6">
                {products.slice(14, 21).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
        
              {/* Fourth Row (5 Products) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
                {products.slice(21, 26).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        };
        
        const ProductCard = ({ product }) => {
          return (
            <Link
              to={`/product/${product.id}`}
              className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
            >
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-2">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-xs">{product.category}</p>
                <p className="text-blue-600 font-bold mt-1">₹{product.price}</p>
                <p className="text-yellow-500 text-xs">⭐ {product.rating} / 5</p>
              </div>
            </Link>
          );
        }

    export default ProductList;