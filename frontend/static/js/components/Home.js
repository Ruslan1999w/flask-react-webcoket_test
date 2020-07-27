import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

class Home extends React.Component {
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
                  <Button><Link to={`/statistic`}>попробовать</Link></Button>
                </div>
            </div>

            <div className="layout">
            <div className="title"><h2 className="zag">что мы делаем</h2></div>
            <div className="title"><p className="info">Наши системы помогают точно интерпретировать человеческие эмоции,
              собрать полную аналитику по записи с камеры видеонаблюдения. Система
              анализирунт пол, возраст, и даже эмоции человека, помогая тем самым лучше
              узнать предпочтения и интересы отдельных групп лиц, что способствует повышению
              качества мероприятий и увеличению продаж.</p>
            </div>
            </div>



            <div className="layout">
            <div className="title"><h3 className="zag">наши технологии</h3></div>
            </div>
            <div className="layout">
            <div className="title"><h4 className="zag">решения</h4></div>
            </div>

        </div>

      );
    }
  }
  export default Home;
