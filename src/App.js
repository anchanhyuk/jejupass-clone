
import { Routes, Route, Link } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import Home from './page/home/Home'

function App() {
  const menu = ["ESG", "항공","렌터카","숙박","맛집","카페패스"]
  return (
    <div className="App">
      <div className="nav">
        <div className="nav-top">
          <img src="https://www.graphicpie.com/wp-content/uploads/2020/11/among-us-logo-png-1.png"/>
          <ul className="nav-center">
            {menu.map((menu)=>(<li>{menu}</li>))}
            <li className="line">|</li>
            <li><SearchIcon/></li>
          </ul>
          <div className="nav-right">
            <ExitToAppIcon fontSize="small"/>
            <p>로그인</p>
            <WorkOutlineIcon fontSize="small"/>
            <p>장바구니</p>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/webproject1/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
