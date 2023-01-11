import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
const MenuBar = () => {
  return (
    <nav>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>

          <div class="menu-items">
            {/* <div><Link className='' to="/" >Головна</Link></div>
<div>            <Link className='' to="/texttask" >Правила</Link>
</div>
            <div>            <Link className='' to="/texttask" >Про гру</Link>
</div>

            <div>            <Link className='' to="/texttask" >Кабінет</Link>
</div>

            <div>            <Link className='' to="/texttask" >Вибір складності</Link>
</div>

            <div>            <Link className='' to="/texttask" >Вибір гри</Link>
</div> */}
            <li>
              <Link className="" to="/">
                Головна
              </Link>
            </li>
            <li>
              {' '}
              <Link className="" to="/rules">
                Правила
              </Link>
            </li>
            <li>
              {' '}
              <Link className="" to="/about">
                Про гру
              </Link>
            </li>

            <li>
              {' '}
              <Link className="" to="/">
                Кабінет
              </Link>
            </li>

            <li>
              {' '}
              <Link className="" to="/gametype">
                Вибір складності
              </Link>
            </li>

            <li>
              {' '}
              <Link className="" to="/gametype">
                Вибір гри
              </Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;

{
  /* 
<label for="toggle">❔</label>
<input type="checkbox" id="toggle">
<aside>
  <h2>Information</h2>

  <p>Some very important information about your app:</p>

  <ol>
    <div>It has a really cool slide-out information box.</div>
    <div>This information box uses a combination of fixed positioning and a CSS transition for the smooth sliding.</div>
    <div>It also uses a cool technique called the <a href="https://css-tricks.com/the-checkbox-hack/">checkbox hack</a>.</div>
    <div>This allows you to create a nice "toggle on/toggle off" UI effect without using any JavaScript, which will work in IE9 and above (the smooth transition will work in IE10 and above.)</div>

  </ol>

</aside> */
}
