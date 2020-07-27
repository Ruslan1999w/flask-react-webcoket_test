import React from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">

          <ul>
            <li>
              <a>
                <Link to="/">Услуги</Link>
              </a>
            </li>

            <li>
              <a>
                <Link to="/about">Тарифы</Link>
              </a>
            </li>

            <li>
              <a>
                <Link to="/profile">О нас</Link>
              </a>
            </li>


            <li>
              <a>
                <Link to="/profile">Контакты</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/profile">Вход</Link>
              </a>
            </li>
          </ul>

        </div>
      </div>
    );
  }
}
export default Header;
