import React, { useState } from 'react';
import './cart.css';

const Cart = ({ cart, setCart }) => {
  const [delivery, setDelivery] = useState('');
  const [deliveryCompany, setDeliveryCompany] = useState('company1');

  const handleOrder = () => {
    alert(`Заказ оформлен! Доставка по адресу: ${delivery}`);
    setCart([]);
    setDelivery('');
  };

  const handlePayment = () => {
    alert(`Оплата прошла успешно! Общая сумма: $${totalPrice + deliveryCost}`);
    setCart([]);
    setDelivery('');
  };

  const handleRemoveItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const deliveryCost = deliveryCompany === 'company1' ? 200 : deliveryCompany === 'company2' ? 150 : 180;

  return (
    <section id="cart" className="cart">
      <h2 className="cart-header">Корзина</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Корзина пуста</p>
      ) : (
        <div className="cart-details">
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span> - <span className="price">${item.price}</span>
                <button onClick={() => handleRemoveItem(index)} className="remove-button">Удалить</button>
              </li>
            ))}
          </ul>
          
          
          <div className="delivery">

            <h4>Выберите компанию доставки:</h4>

            <select value={deliveryCompany} onChange={(e) => setDeliveryCompany(e.target.value)} className="delivery-select">
              <option value="company1">Ship a Car Direct</option>
              <option value="company2">Montway Auto Transport</option>
              <option value="company3">CFR Rinkens</option>
            </select>

          </div>

         
          <div className="cart-summary">
            
            <h4>Стоимость доставки: <span className="price">${deliveryCost}</span></h4>

            <h4>Итоговая сумма: <span className="price">${totalPrice + deliveryCost}</span></h4>

          </div>

        
          <div className="delivery">
            <h4>Адрес доставки:</h4>
            <input
              type="text"
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
              placeholder="Введите адрес доставки"
              className="delivery-input"
            />


            <div className="action-buttons">
              <button onClick={handleOrder} className="order-button">Оформить заказ</button>
              <button onClick={handlePayment} className="pay-button">Оплатить</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
