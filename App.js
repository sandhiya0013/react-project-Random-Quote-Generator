import React, {useState, useEffect} from 'react';
import './App.css';
import './Footer';
import RadioGroupRating from './RadioGroupRating';
import Footer from './Footer';
import Header from './Header';
import { TwitterShareButton, TwitterIcon } from 'react-share';

function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  },[]);

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  }
  return (
    <div className="App">
      <Header/>
         <div className="quote">
            <h2>{quote}</h2>
            <small>-{author}-</small>
            <RadioGroupRating/>
         <br/>
         <TwitterShareButton
  url={'https://www.example.com'}
  quote={'Dummy text!'}
  hashtag="#muo"
>
  <TwitterIcon size={32} round />

         </TwitterShareButton>
         </div>
         <br/>
         <button className="btn" onClick={fetchNewQuote}>Generate New Quote</button>
         <Footer/>
    </div>
  );
}

export default App;