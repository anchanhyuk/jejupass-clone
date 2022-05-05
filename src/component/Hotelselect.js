import React from 'react'

const Hotelselect = () => {
  return (
    <div className="content">
    <div>
      <div>
        <p>여행지</p>
        <input type="text" placeholder='여행지를 입력해주세요'></input>
      </div>
    </div>
    <div>
      <div>
        <p>숙박일</p>
        <input type="date" ></input>
      </div>
    </div>
    <div>
      <div className="person">
        <p>인원</p>
        <input type="number" placeholder="1명"></input>
        명
      </div>
    </div>
    <button>검색</button>
  </div>
  )
}

export default Hotelselect