
import React from 'react';
import './home.css';

const cars = [
  
  { id: 2, name: 'Mercedes-Benz C-Class (W204)', price: 28000, image: 'https://avatars.mds.yandex.net/get-verba/787013/2a000001609cfca05f1035c71bfa4f5182a0/cattouchretcr', description: 'Элегантный и динамичный среднеразмерный седан, предлагающий премиум-качество и комфорт.' },
  
  { id: 4, name: 'Mercedes-Benz S-Class (W220 S500)', price: 22000, image: 'https://avatars.mds.yandex.net/get-verba/787013/2a000001609cf7645f3f3384f0dca2f64fb0/456x342', description: 'Флагманский седан Mercedes-Benz, предлагающий максимальный комфорт, технологии и мощь. Известен роскошным интерьером и двигателем V8.' },
  
  { id: 6, name: 'Mercedes-Benz CLA-Class', price: 38000, image: 'https://www.challenges.fr/assets/img/2019/10/16/cover-r4x3w1200-5da7392ee1ab8-dsc-0478-resultat-jpg.jpg', description: 'Спортивный и динамичный компактный седан, с высокоэффективным двигателем и аэродинамичным дизайном.' },
  { id: 7, name: 'Mercedes-Benz GLK', price: 20000, image: 'https://avatars.mds.yandex.net/get-verba/787013/2a000001609d38f0d2d54435a364f33224fa/cattouchret', description: 'Компактный премиальный кроссовер, сочетающий стиль и проходимость, отлично подходит для городской езды.' },
  { id: 8, name: 'Mercedes-Benz GLE', price: 70000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1x208IX64QAkJScyeL17gdpKgqDQYTmgSFQ&s', description: 'Большой внедорожник с роскошным интерьером и отличными ездовыми характеристиками для дальних поездок.' },
  { id: 9, name: 'Mercedes-Benz EQC', price: 65000, image: 'https://www.mbusa.com/content/dam/mb-nafta/us/future-vehicles/my20/EQC/Gallery/2020-EQC-SUV-FMG-008-OL.jpg', description: 'Электрический кроссовер с высокими техническими характеристиками, сочетает стиль и экологичность.' },
  { id: 10, name: 'Mercedes-Benz E-Class (W210 E55)', price: 21000, image: 'https://s.auto.drom.ru/i24220/c/photos/fullsize/mercedes-benz/e-class/mercedes-benz_e-class_809083.jpg', description: 'Спортивная версия E-Class с мощным двигателем AMG, создан для любителей скорости и динамичной езды. Идеален для тех, кто ценит силу и элегантность.' },
  
  { id: 12, name: 'Mercedes-Benz B-Class', price: 23000, image: 'https://www.topgear.com/sites/default/files/2023/03/1%20Mercedes%20B-Class.jpg', description: 'Универсальный минивэн, который идеально сочетает комфорт и функциональность для семейных поездок.' },
  { id: 13, name: 'Mercedes-Benz SL-Class', price: 150000, image: 'https://hips.hearstapps.com/hmg-prod/images/2025-mercedes-amg-sl63-s-e-performance-105-66a3f18138d19.jpg?crop=0.625xw:0.702xh;0.293xw,0.252xh&resize=768:*', description: 'Роскошный родстер с высоким уровнем производительности и элегантным дизайном. Для ценителей спортивных автомобилей.' },
  { id: 14, name: 'Mercedes-Benz S-Class (W221)', price: 25000, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Mercedes-Benz_S_320_CDI_4MATIC_L_%28V_221%29_%E2%80%93_Frontansicht_%281%29%2C_30._August_2011%2C_D%C3%BCsseldorf.jpg/800px-Mercedes-Benz_S_320_CDI_4MATIC_L_%28V_221%29_%E2%80%93_Frontansicht_%281%29%2C_30._August_2011%2C_D%C3%BCsseldorf.jpg', description: 'Превосходный бизнес-седан с передовыми технологиями и роскошным интерьером, который дает максимальный комфорт.' },
  { id: 15, name: 'Mercedes-Benz G-Class (G500)', price: 136000, image: 'https://www.topgear.com/sites/default/files/2024/05/20-Mercedes-G-Class-review.jpg', description: 'Мощный внедорожник с продвинутыми функциями и роскошной отделкой. Идеален для любителей приключений и комфортных поездок.' }
];

function Home({ addToCart }) {

 

  return (
    <div className="home">
      <h2>Наши автомобили</h2>
      <div className="cars-container">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.description}</p>
            <p>Цена: ${car.price}</p>
            <button className='carcart' onClick={() => addToCart(car)}>Добавить в корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
