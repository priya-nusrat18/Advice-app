
import {  useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote]=useState([]);
  console.log(quote);

  const newQuote =() =>{
    fetch("https://api.adviceslip.com/advice")
		.then((res) => res.json())
		.then((data) => setQuote(data.slip.advice))
  }
  return (
		<div className="App">
			<div className="card">
				<h1 className="headings">{quote}</h1>
				<button className="button" onClick={newQuote}>
					<span>Give Me Advice!</span>
				</button>
			</div>
		</div>
  );
}

export default App;
