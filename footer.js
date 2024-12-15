import './footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer>
  <div class="footer-container">
    <div class="footer-section">
      <h3>О компании</h3>
      <p>Мы предлагаем лучшие товары и услуги для вас. Наши клиенты - наш приоритет!</p>
    </div>
    <div class="footer-section">
      <h3>Быстрые ссылки</h3>
      <ul>
        <li><a href="/">Главная</a></li>
        <li><a href="/about">О нас</a></li>
        
        
      </ul>
    </div>
    <div class="footer-section">
      <h3>Контактная информация</h3>
      <p>Телефон: +996 701 451 146</p>
      <p>Email: progibator2019@gmail.com</p>
      <p>Адрес: п.Земля 314</p>
    </div>
    <div class="footer-section">
      <h3>Социальные сети</h3>
      <ul class="social-icons">

        <li><a href="https://www.instagram.com/progibatyr/profilecard/?igsh=MTljb2F2bXN5bHh6eQ==" target="_blank"><div class="fir" ><img width={39} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png'></img></div></a></li>
        <li><a href="https://wa.me/996701451146?text=Здравствуйте, я нашел ваши контакты на сайте BenzDrive." target="_blank"><img width={40} src='https://iconape.com/wp-content/files/sc/291960/svg/whatsapp-icon-seeklogo.com.svg'></img></a></li>
        <li><a href="https://discord.gg/cVptgzcX" target="blank"><img width={44} src="https://seeklogo.com/images/D/discord-logo-7A1EC3216C-seeklogo.com.png"></img></a></li>
        
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Все права защищены.BenzDrive.</p>
  </div>
</footer>

  );
};

export default Footer;
