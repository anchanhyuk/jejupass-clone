import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Cafeselect = () => {
  return (
    <div className="content">
    <div>
      <div className="food">
        <input type="text" placeholder='상호명 혹은 키워드를 입력하세요'></input>
      </div>
    </div>
    <button className="foodbutton"><SearchIcon/></button>
  </div>
  )
}

export default Cafeselect