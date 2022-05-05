import React from 'react'


const Flightselect = () => {
  return (
    <div className="content">
      <div>
        <div>
          <p>출발</p>
          <input type="text" placeholder='어디서 출발 하시나요?'></input>
        </div>
        <div>
          <p>도착</p>
          <input type="text" placeholder='어디로 가시나요?'></input>
        </div>
      </div>
      <div>
        <div>
          <p>탑승일</p>
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

export default Flightselect