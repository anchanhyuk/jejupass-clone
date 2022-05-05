import React from 'react'

const Carselect = () => {
  return (
    <div className="content">
      <div>
        <div>
          <p>대여/반납일</p>
          <input type="text" placeholder='대여/반납일을 선택해주세요'></input>
        </div>
      </div>
      <div>
        <div>
          <p>대여/반납시간</p>
          <input type="text" placeholder='시간을 선택해주세요'></input>
        </div>
      </div>
      <div>
        <div>
          <p>차량조건</p>
          <input type="text" placeholder='조건을 선택해주세요'></input>
        </div>
      </div>
      <div>
        <div>
          <p>운전자조건</p>
          <input type="text" placeholder='운전자조건을 선택해주세요'></input>
        </div>
      </div>
      <button>검색</button>
    </div>
  )
}

export default Carselect