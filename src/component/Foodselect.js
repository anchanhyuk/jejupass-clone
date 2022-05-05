import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Foodselect = () => {
  return (
    <div className="content">
    <div>
      <div className="food">
        <input type="text" placeholder='맛집을 검색하세요'></input>
      </div>
    </div>
    <button className="foodbutton"><SearchIcon/></button>
  </div>
  )
}

export default Foodselect