/* eslint-disable */ // 코드에는 문제 없지만 warning 뜨는 경우에 입력하면 사라짐

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '리액트 연습중'; // 자료를 잠깐 저장할 때 사용
  let [title, 글제목변경] = useState(['리액트 공부 1일차', '리액트 공부 2일차', '리액트 공부 3일차']);
  /* state도 변수와 비슷한 역할을 함 
    1. import { useState}
    2. useState(보관할 자료)
    3. let [작명, 작명]
  */
  // title는 state에 보관했던 자료가 나옴
  // b는 state 변경을 도와주는 함수

  let [like, likeChange] = useState(0);

  function likeUp() {
    likeChange(like + 1);
  }


  function titleChange2() {
    let copy = [...title];  // array/object는 원본 데이터를 보존하는 게 좋아 copy라는 새로운 변수를 설정 해주는 게 좋다
    // ...는 괄호를 벗겨주라는 문법이라 독립적인 array가 되고 화살표도 변경이 되어 state변경이 잘 된다
    copy[0] = '리액트 공부 제목 변경';
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'yellow', fontSize: '20px' }}>혜빈 블로그</h4>
      </div>

      <button onClick={titleChange2}>글수정</button>
      <button>가나다순정렬</button>

      <div className='list'>
        <h4>{title[0]} <span onClick={likeUp}>🧡</span> {like} </h4>
        <p>2023년 3월 9일</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2023년 3월 9일</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2023년 3월 9일</p>
      </div>

      <Modal></Modal>

      <h4>{post}</h4>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// let Modal = () => {
//   return(
//     <div></div>
//   )
// }


export default App;
