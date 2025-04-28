import style from './menu.module.css';
import ball from '../assets/images/ball.png';

export const Menu = ({ op1, op2 }) => {
  return (
    <nav className={`${style.navBar}`}>
      <div className={style.container}>
        <img src={ball} alt="logoNav" className={style.logoNav} />
        <ul className={style.navMenu}>
          <li>
            <a className={style.navLink} href="/">{op1}</a>
          </li>
          <li>
            <a className={style.navLink} href="/db">{op2}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};