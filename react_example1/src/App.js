import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';


function App() {
  let name = "방우혁";
  return (
    <div className="App">
      <MyHeader />  
        <h2>안녕 리액트 {name}</h2>
        <b id="bold_text">React.js</b>
      <MyFooter />
    </div>
  );
}

export default App;
