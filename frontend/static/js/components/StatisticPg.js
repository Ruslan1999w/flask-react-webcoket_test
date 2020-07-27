import React from "react";

// /video_feed', methods=['GET'] 
class StatisticPg extends React.Component {
  state = {
    items: [],
  };
  componentDidMount() {
    fetch("/video_feed", {
      method: "GET",
      headers: {
        'Accept': 'image/webp, image/apng,image/*,*/*'
      },
    })
      .then((response) => {
        console.log("настройка: ", response);
        return response.json();
      })
      .then((data) => {
        console.log("Вот что возвратилось: ", data);
        console.log(data);
        this.setState({items: data });
        console.log(this);
      });
  }
    render() {
      const { items } = this.state;
      return (
        <div className="wrap">


          <div className="common_data">
          
            <div className="stream">
            <img height="500px" width="500px" src="/video_feed"/>
            </div>

            <div className="carousel">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>

            <div className="people_quantity">
              
            </div>
            
            

          </div>


          <div className="user_statistic">

          </div>


          </div>
        
      );
    }
  }
  export default StatisticPg;