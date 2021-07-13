import './App.css';
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

function App() {

  let [guestTextarea, guestTextareachange] = useState([]);
  let [guestPush, guestPushchange] = useState('');

  return (
    <div className="App">

      <Route exact path="/">

        <haeder className="header">
          <h1 className="headerTitle">
            <Link to="/">Daemin-Portfolio</Link>
          </h1>
          <ul className="headerDesc">
            <li className="headerDesc ab">
              <Link to="/Portfolio">
                Portfolio
              </Link>
            </li>
            <li className="headerDesc po">
              <Link to="/contact">
                contact
              </Link>
            </li>
          </ul>
        </haeder>

        <body className="body">
          <div className="bodyHeader about">
            <header className="aboutHeader title">
              <h1>Self Introduction</h1>
              <ul className="aboutDesc">
                <li>이름: 곽대민(Gwak Damon)</li>
                <li>생일: 1992.08.09</li>
                <li>주소: 화성시(Hwaseong-si, Republic of Korea) </li>
                <li>전화번호: 010-5025-1298</li>
              </ul>
            </header>

            <header className="aboutHeader desc">
              <h1>Skill</h1>
              <ul className="aboutDesc box">
                <li className="aboutBar">
                  <p>JAVASCRIPT</p>
                    <span className="geaphbar">
                      <p className="geaphbarGauge ja">70%</p>
                    </span>
                </li>
                <li className="aboutBar">
                  <p>REACT</p>
                  <span className="geaphbar">
                    <p className="geaphbarGauge re">30%</p>
                  </span>
                </li>
                <li className="aboutBar">
                  <p>HTML5</p>
                  <span className="geaphbar">
                    <p className="geaphbarGauge ht">85%</p>
                  </span>
                </li>
                <li className="aboutBar">
                  <p>CSS3</p>
                  <span className="geaphbar">
                    <p className="geaphbarGauge css">70%</p>
                  </span>
                </li>
                <li className="aboutBar">
                  <p>SASS</p>
                  <span className="geaphbar">
                    <p className="geaphbarGauge sass">30%</p>
                  </span>
                </li>
              </ul>
            </header>

            <header className="aboutHeader footor">
              <h1>Education</h1>
              <ul className="aboutDesc">
                <li>-김버그의 HTML&CSS는 재밌다-수료👨‍🎓</li>
                <li>-coding apple React sass-수료👨‍🎓</li>
              </ul>
            </header>

          </div>
        </body>
      </Route>
      
      <Route path="/Portfolio">

        <haeder className="header">
          <h1 className="headerTitle">
            <Link to="/">Daemin-Portfolio</Link>
          </h1>
          <ul className="headerDesc">
            <li className="headerDesc ab">
              <Link to="/Portfolio">
                Portfolio
              </Link>
            </li>
            <li className="headerDesc po">
              <Link to="/contact">
                contact
              </Link>
            </li>
          </ul>
        </haeder>
        
        <body className="body">
          <div className="bodyHeader portfolio">
            <header className="portfolioHeader ca">
              <h1>계산기</h1>
              <a href='https://gwakdaemin.github.io/container/calculator.html' target='_blank' className="portfolioDesc">
                <img className="img" src="img/container.jpg"></img>
              </a>
            </header>

            <header className="portfolioHeader ma">
              <h1>마크업</h1>
              <a href='https://gwakdaemin.github.io/markup/final_file/01-Landing.html' target='_blank' className="portfolioDesc">
                <img className="img" src="img/make.jpg"></img>
              </a>
            </header>

            <header className="portfolioHeader mahome">
              <h1>홈페이지 마크업</h1>
              <a href='https://gwakdaemin.github.io/shop/' target='_blank' className="portfolioDesc">
                <img className="img" src="img/homemake.jpg"></img>
              </a>
            </header>
          </div>
        </body>
      </Route>

      <Route path="/contact">

        <haeder className="header">
          <h1 className="headerTitle">
            <Link to="/">Daemin-Portfolio</Link>
          </h1>
          <ul className="headerDesc">
            <li className="headerDesc ab">
              <Link to="/Portfolio">
                Portfolio
              </Link>
            </li>
            <li className="headerDesc po">
              <Link to="/contact">
                contact
              </Link>
            </li>
          </ul>
        </haeder>
        
        <body className="bodyMail">
          <div className="mail">
              <p>📨 저에게 메일을 보내고 싶으시다면!!</p>
              <a target="_blank" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=eoals0809@gmail.com" className="mailBlank">eoals0809@gmail.com</a>
              <p>최대한 빨리 답장 해드리겠습니다😊</p>
          </div>
        </body>
      </Route>
      



    </div>
  );
}



export default App;