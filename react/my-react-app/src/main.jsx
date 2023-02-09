import React, { StrictMode } from 'react'
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';

// import App from './App'
// import './index.css'

function getButtonTExt() {
  return 'Click on me,dude!'
}
const App = () => {
  const buttonText = "Click me!";
  const labelText = "Enter Name:";
  // different types of variable we can reference inside JSX
  // const buttonText = 12345;                  --> Integer
  // const buttonText = [10, 20];               --> Array with integer inside
  // const buttonText = [10, 20];               --> Array with string inside
  // const buttonText = { text: 'Click me' };

  return (
    <div>
      {/* <label className="label" for="name"> Enter name:</label> */}
      <label className="label" htmlFor="name"> {labelText}</label>
      <input type="text" id="name" />

      {/* putting plain text inside a button */}
      <button style={{ backgroundColor: 'black', color: 'white' }}>Submit</button>

      {/* instead of putting plain Submit text,we used it a variable name below buttonText to display Click me!  */}
      {/* here {buttonTExt} is not a JS object cause of curly braces,this is a syntax used to refer to some JS variable */}
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
      {/* <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button> */}

      {/* instead of putting plain Submit text,we called function below getButtonText to display Click on me,dude!  */}
      <button style={{ backgroundColor: 'red', color: 'white' }}>{getButtonTExt()}</button>
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
