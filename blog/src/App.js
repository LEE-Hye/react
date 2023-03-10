/* eslint-disable */ // 코드에는 문제 없지만 warning 뜨는 경우에 입력하면 사라짐

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '리액트 연습중'; // 자료를 잠깐 저장할 때 사용
  let [title, b] = useState(['리액트 공부 1일차', '리액트 공부 2일차', '리액트 공부 3일차']);
  /* state도 변수와 비슷한 역할을 함 
    1. import { useState}
    2. useState(보관할 자료)
    3. let [작명, 작명]
  */
  // title는 state에 보관했던 자료가 나옴
  // b는 state 변경을 도와주는 함수

  let [like, likeChange] = useState(0);

  function likeUp(){
    likeChange(like+1);
  }


  function titleChange2(){
    b(title[0]);
  }

  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style={{color : 'yellow', fontSize : '20px'}}>혜빈 블로그</h4>
      </div>
      <div className = 'list'>
        <h4>{title[0]} <span onClick={likeUp}>🧡</span> {like} </h4>
        <p>2023년 3월 9일</p>
        <span onClick={titleChange2}>💌</span>
      </div>
      <div className = 'list'>
        <h4>{title[1]}</h4>
        <p>2023년 3월 9일</p>
      </div>
      <div className = 'list'>
        <h4>{title[2]}</h4>
        <p>2023년 3월 9일</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
