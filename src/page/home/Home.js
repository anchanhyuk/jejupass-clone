import React, {useEffect, useState} from 'react'
import './Home.css'

import Flightselect from '../../component/Flightselect'
import Cafeselect from '../../component/Cafeselect'
import Carselect from '../../component/Carselect'
import Foodselect from '../../component/Foodselect'
import Hotelselect from '../../component/Hotelselect'

import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HotelIcon from '@mui/icons-material/Hotel';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';



const Home = () => {
  const [select, setselect] = useState("flight");
  const userselect=(witchselect)=>{
    setselect(witchselect);
  }


  return (
    <div className="home-nav">
      <div className="select">
        <button onClick={() => userselect('flight')} className={select == "flight" ? "active" : "disabled"}><FlightIcon/></button>
        <button onClick={() => userselect('car')} className={select == "car" ? "active" : "disabled"}><DirectionsCarIcon/></button>
        <button onClick={() => userselect('hotel')} className={select == "hotel" ? "active" : "disabled"}><HotelIcon/></button>
        <button onClick={() => userselect('food')} className={select == "food" ? "active" : "disabled"}><RoomServiceIcon/></button>
        <button onClick={() => userselect('cafe')} className={select == "cafe" ? "active" : "disabled"}><LocalCafeIcon/></button>
      </div>
      <div className={select == "flight" ? "active" : "disabled"}>
        <Flightselect/>
      </div>
      <div className={select == "car" ? "active" : "disabled"}>
        <Carselect/>
      </div>
      <div className={select == "hotel" ? "active" : "disabled"}>
        <Hotelselect/>
      </div>
      <div className={select == "food" ? "active" : "disabled"}>
        <Foodselect/>
      </div>
      <div className={select == "cafe" ? "active" : "disabled"}>
        <Cafeselect/>
      </div>
      <div className="youtube">.
        <div className="overflow">
          <h3>MAKE JEJU BETTER</h3>
          <p>
            청정 제주를 지키는 여행,<br></br>
            제주패스와 함께해 주세요
          </p>
          <p>
          참여하기 &#62;
          </p>
        </div>
        <iframe className="youtubeplayer" src="https://www.youtube-nocookie.com/embed/H69tJmsgd9I?controls=0&autoplay=1&loop=1&playlist=H69tJmsgd9I&mute=1 " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )

}


export default Home;