import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



const date = new Date();
const time = date.getHours();

let greeting = '';

const cssStyle={
};

if (time>=1 && time<=12){
  greeting = 'Good Moring';
  cssStyle.color = 'green';
} else if(time>=12 && time<=19){
  greeting = 'Good AfterNoon';
  cssStyle.color = 'orange';
} else{
  greeting = 'Good Night';
  cssStyle.color = 'black';
}



ReactDOM.render(<>
<div>
<h1 >Hello Sir,  <span style={cssStyle}>{greeting}</span></h1>
</div>
</>,
  document.getElementById('root')
);
