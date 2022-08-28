import logo from './img/logo.png';
import love from './img/love.png';
import banner from './img/banner.jpg';
import home from './img/home1.jpg';
import image1 from './img/image1.svg';
import image2 from './img/image2.svg';
import image3 from './img/image3.svg';
import image4 from './img/image4.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="Header">
            <div className="top-menu">
                <div className="top-menu-logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="top-menu-how-many-of-us">
                    <div className="top-menu-how-many-of-us-text">тут будет текст</div>
                    <img src={love} alt=""/>
                    <div className="top-menu-how-many-of-us-number">134</div>
                </div>
                <div className="main-menu">
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>services</li>
                        <li>projects</li>
                        <li>news</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="banner">
            <div className="banner-block-one">
                <img src={banner} alt=""/>
            </div>
            <div className="banner-block-two">
                <div className="banner-block-two-company-name">Название компании</div>
                <div className="banner-block-two-banner-header">Your vision, our expertise!</div>
                <div className="banner-block-two-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, libero vel egestas fringilla.</div>
                <div className="banner-block-two-button">кнопка</div>
            </div>
            <div className="banner-block-three">
            </div>
            <div className="block-social-networks">
                <ul>
                    <li>facebook</li>
                    <li>twitter</li>
                    <li>instagram</li>
                    <li>pinterest</li>
                </ul>
            </div>
        </div>
        <div className="about-us">
            <div className="about-us-block-one">
                <h3>about us</h3>
                <h1>It’s our job to make your home feel like it belongs to you</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, libero vel egestas fringilla, purus sit amet ante vel odio condimentum tortor.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a risus ac mauris cursus tempor at sit amet orci. Suspendisse vel laoreet mauris. Donec sit amet ante vel odio condimentum lobortis in nec ex. Curabitur varius iaculis vehicula. Vestibulum quis venenatis lorem at, suscipit vel mauris purus.</p>
            </div>
            <div className="about-us-block-two">
                <img src={home} alt=""/>
            </div>
        </div>
        <div className="types-of-glamping">
            <div className="types-of-glamping-block-one">
                <div className="types-of-glamping-card">
                    <div className="types-of-glamping-card-img">
                        <img src={image1} alt=""/>
                    </div>
                    <div className="types-of-glamping-text">
                        <h3>Tree House</h3>
                        <p>Lorem ipsum dolor sit amet, conscte tur adipis ncing elit, sed do eiusmod tempor incididunt ut labore et dolore magna our aliqua ut enim</p>
                    </div>
                </div>
                <div className="types-of-glamping-card">
                    <div className="types-of-glamping-card-img">
                        <img src={image3} alt=""/>
                    </div>
                    <div className="types-of-glamping-text">
                        <h3>Tree House</h3>
                        <p>Lorem ipsum dolor sit amet, conscte tur adipis ncing elit, sed do eiusmod tempor incididunt ut labore et dolore magna our aliqua ut enim</p>
                    </div>
                </div>
            </div>
            <div className="types-of-glamping-block-two">
                <div className="types-of-glamping-card">
                    <div className="types-of-glamping-card-img">
                        <img src={image2} alt=""/>
                    </div>
                    <div className="types-of-glamping-text">
                        <h3>Tree House</h3>
                        <p>Lorem ipsum dolor sit amet, conscte tur adipis ncing elit, sed do eiusmod tempor incididunt ut labore et dolore magna our aliqua ut enim</p>
                    </div>
                </div>
                <div className="types-of-glamping-card">
                    <div className="types-of-glamping-card-img">
                        <img src={image4} alt=""/>
                    </div>
                    <div className="types-of-glamping-text">
                        <h3>Tree House</h3>
                        <p>Lorem ipsum dolor sit amet, conscte tur adipis ncing elit, sed do eiusmod tempor incididunt ut labore et dolore magna our aliqua ut enim</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="footer-block-one">
                <img src="" alt=""/>
                <p>We are the leading architect and interior design firm in the world.</p>
                <div className="footer-block-one-social-networks">
                    <ul>
                        <li>facebook</li>
                        <li>twitter</li>
                        <li>instagram</li>
                        <li>pinterest</li>
                    </ul>
                </div>
            </div>
            <div className="footer-block-two">
                <h3>Pages</h3>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>services</li>
                    <li>projects</li>
                    <li>news</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-block-three">
                <div className="email">
                    <h3>Contact</h3>
                    <p>Email: <br/>
                    abramovavs75@mail.ru</p>
                </div>

                <div className="telephone">
                    <p>Телефон: <br/>
                    8 (912) 659-39-89</p>
                    <p>App: Viber, WhatsApp</p>
                </div>
            </div>
            <div className="footer-block-four">
                <h3>Новостная рассылка</h3>
                <p>Подпишитесь на нашу рассылку и будьте в курсе наших последних акций</p>
                <input type="text" placeholder="Ваш адрес электронной почты"/>
                <div className="footer-block-four-error">Введенный email недействителен</div>
                <div className="footer-block-four-prompt">В поле есть ошибка. Пожалуйста проверьте и попробуйте снова.</div>
            </div>
        </div>
    </div>
  );
}

export default App;
