import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div>

      <aside>
      
        <ol>
          <h1>Меню</h1>
          <button>
        <Link to="/">Авторизація</Link>
        </button>
        <button>
        <Link to="/">Вибір Рівня</Link>
        </button>
        <button>
        <Link to="/">Редагувати імена</Link>
        </button>
          <button>
        <Link to="/">Редактор завдань</Link>
        </button>
        <button>
        <Link to="/">Правила</Link>
        </button>
        <button>
        <Link to="/">Вибір мови</Link>
        </button>
        </ol>
      </aside>
    </div>
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
    <li>It has a really cool slide-out information box.</li>
    <li>This information box uses a combination of fixed positioning and a CSS transition for the smooth sliding.</li>
    <li>It also uses a cool technique called the <a href="https://css-tricks.com/the-checkbox-hack/">checkbox hack</a>.</li>
    <li>This allows you to create a nice "toggle on/toggle off" UI effect without using any JavaScript, which will work in IE9 and above (the smooth transition will work in IE10 and above.)</li>

  </ol>

</aside> */
}
