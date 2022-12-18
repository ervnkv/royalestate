import './Header.scss';

function Header() {
    return(
      <header className='header'>
        <div className='header_logo'>
          <img width={80} height={80} src="/img/logo.png" alt="Logo" />
          <div className='header_logo_text'>
            <h3>Royalestate</h3>
            <p>оценочная компания</p>
          </div> 
        </div>

        <ul className='header_menu'>
          <li>Акции</li>
          <li>Услуги</li>
          <li>Оценка для банка</li>
          <li>Оборудование</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>

        <div className='header_socialMedia'>
            +7 (812) 425-33-42
        </div>
      </header>
    )
}
export default Header;