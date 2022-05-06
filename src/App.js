
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
        <Route path="/jejupass-clone/" element={<Home />} />

      </Routes>
      <footer>
        <div className="footer-manu">
          <ul>
            <li>
              <h6>제주패스</h6>
              <ul>
                <li>회사소개</li>
                <li>회원혜택 안내</li>
              </ul>
            </li>
            <li>              
              <h6>고객센터</h6>
              <ul>
                <li>공지사항</li>
                <li>자주찾는 질문</li>
                <li>예약확인</li>
              </ul>
            </li>
            <li>
            <h6>ESG</h6>
              <ul>
                <li>그린 앰버서더</li>
                <li>캠페인 기부</li>
              </ul>
            </li>
            <li>
            <h6>전화예약 상담</h6>
              <p>이용에 굼금하신 점이 있으신가요?</p>
            </li>
          </ul>
          <div className="call">
            <h6>1111-1111</h6>
            <div>
              <p>평일</p>
              <p>09:00 ~ 18:00</p>
            </div>
            <div>
              <p>점심시간</p>
              <p>12:00 ~ 13:00</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="inner">
            <p>개인정보 처리방침 | 이용약관</p>
            <p>(주)캐플릭스 대표이사 : 윤형준 사업자등록번호 : 105-87-76000 사업자정보조회 통신판매신고 제2015-제주연동-43호 관광사업자 등록번호 : 제2021-08호
            제주특별자치도 제주시 신광로 21, 4층 (우)63125
            </p>
            <p>
            (주)캐플릭스는 개별 항공권 및 숙박 상품에 대하여 통신판매중개자로서 통신판매의 당사자가 아니며 해당상품의 거래정보 및 거래 등에 대해 책임을 지지 않습니다.
            (주)캐플릭스는 렌터카 파트너사가 제공하는 일부 렌터카에 대하여 통신판매중개자의 지위를 가지며, 해당 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
