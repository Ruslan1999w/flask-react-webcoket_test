import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import ReactDOM from "react-dom";


class GreetingPage extends React.Component {
    render() {
      return (
        <div className="wrapper">

            <div className="layout">
                <div className="title">
                    <h1>МИР ГЛАЗАМИ РОБОТОВ</h1>
                </div>
                <div className="title">
                  <p className="podzag">Быстрая система распознования эмоционального состояния
                   работающая на основе нейронной сети</p>
                </div>
                <div className="title">
                 <button> <Link to={`/video_feed`}>попробовать</Link></button>
                </div>
            </div>

            <div className="layout" >
            <div className="title"><h2 className="zag">что мы делаем</h2></div>
            <div className="title"><p className="info">Наши системы помогают точно интерпретировать человеческие эмоции,
              собрать полную аналитику по записи с камеры видеонаблюдения. Система
              анализирунт пол, возраст, и даже эмоции человека, помогая тем самым лучше
              узнать предпочтения и интересы отдельных групп лиц, что способствует повышению
              качества мероприятий и увеличению продаж.</p>
            </div>
            </div>



            <div className="layout2">
              <div className="title2"><p className="point">Широкий разброс параметров (на алгоритм не влияют
                возрастные различия, освещение, положение головы и т.д.)</p></div>
            <div className="title2"><h3 className="zag2">Технология</h3></div>
            <div className="title2"><p className="point">Нейронная сеть способна самостоятельно находить все новые и новые закономерности и на
              основании этого делать выводы и прогнозы</p></div>

            </div>
            <div className="layout2">
            <div>
            <div className="title2"><p className="h">Доступна бесплатная версия</p></div>
            <div className="title2"><p className="h2">Вы сможете оценить возможности программы и познакомиться с ее основными функциями</p></div>
            <div className="title2"><button>попробовать</button></div>
            </div>

            <div>
            <div className="title2"><p className="h">Платные тарифы</p></div>
            <div className="title2"><p className="h3">Хотите получить больше возможностей, расширенную статистику и неогранниченные возможности использования, оформите подписку</p></div>
            <div className="title2"><button className="buttonn">Оформить</button></div>
            </div>

        </div>
        <div className="layout3">
          <div><button className="bot">SUPPORT</button></div>

          <div><button className="bot">MAIL</button></div>

          <div><button className="bot">CALL</button></div>

          <div><button className="bot">FIND US</button></div>
        </div>
        </div>
      );
    }
  }
  export default GreetingPage;
