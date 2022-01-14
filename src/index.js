import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App3';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const name = ["shubham", "sutar"];
const bio = [1, ...name, 21, "male"];
console.log(bio);

var shooter = ["pubg", "condition zero"];
var racing = ["asphalt 8", "Need For Speed"];
var games = [...shooter, ...racing];
console.log(games)

var shooter2 = ["pubg", "condition zero", "need for speed"];
var [first, ...remain] = shooter2;
console.log(first)
console.log(remain)


const fullName = {
  fname: "shubham",
  lname: "sutar"
}

const biodata = {
  id: 1,
  ...fullName,
  age: 21,
  gender: "male"
}
console.log(biodata);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
