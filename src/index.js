import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();

// function Example() {
//   // "count"라는 새 상태 변수를 선언합니다
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }


// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     };
//   }
//   tick() {
//     this.setState({
//       date: new Date(),
//     })
//   }
//   componentDidMount() {
//     this.timerID = setInterval(() => {
//       this.tick();
//     }, 1000);
//     console.log('mount')
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//     console.log('ummount')
//   }
//   render() {
//     return (
//       <div>
//         <h1>hellow, world</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         <Example />
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );