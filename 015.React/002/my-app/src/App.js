// import './App.css';
// // import React, { Fragment } from 'react';

// function Licat(props) {
//   return(
//     <div>
//       <h1>안녕, {props.name} 1호! {props.age}살</h1>
//       <h1>안녕, 라이캣 2호!</h1>
//     </div>
//   )
// }

// function Time(props) {
//   return(
//     <div>
//       <h1>시간</h1>
//     </div>
//   )
// }

// function App() {
//   // const now = new Date();
  
//   return (
//         // <div>
//         //     <h1 style={{backgroundColor:"black", color:"white"}}>안녕, 라이캣 1호</h1>
//         //     <h1>안녕, 라이캣 2호!</h1>
//         //     <div className="newClass"/> {/* class대신 className=""로 진행! */}
//         //     <div style = {{backgroundColor: 'black', color: 'white'}}>
//         //       <h2 style = {{color: 'crimson'}}>년 : {now.getFullYear()}년</h2>
//         //       <h2>월/일 : {now.getMonth() + 1}/{now.getDate()}</h2>
//         //       <h2>시간 : {now.getHours()}시 {now.getMinutes()}분 {now.getSeconds()}초</h2>
//         //     </div>
//         // </div>

//         // Fragment사용
//     // <React.Fragment> {/* <></> 으로 작성 가능 */}
// 		// 	<h1>안녕, 라이캣 1호!</h1>
// 		// 	<h1>안녕, 라이캣 2호!</h1>
// 		// </React.Fragment>

//     // 컴포넌트 만들기
//     <div>
//       <Licat name="Gray" age="27" /> {/* 라이켓 모음 */}
//       <Time /> {/* 시간보여주기 */}
//     </div>
//   );
// }

// export default App;

// 각 컴포넌트들을 가지고 옵니다!
// import Hello from './Components/Hello';
// import Time from './Components/Time';

// function App() {
//   return (
//     <div>
//       <Hello name="개리"/>
//       <Time />
//     </div>
//   );
// }

// export default App;

function Resume({ hello, name, hobby, food, color }) { // 구조분해할당
  return (
    <div style={{ border: "solid 1px", width: "500px" }}>
      <h1>{name="Gary"} 자기소개서</h1>
      <h1>{hello="Hi, guys!"}</h1>
      <h2>취미 : {hobby="Climbing"}</h2>
      <h2>좋아하는 음식 : {food="Beef"}</h2>
      <h2>
        좋아하는 색 : <span style={{color:props.color}}>{color="green"}</span>
      </h2>
    </div>
  );
}
export default Resume;