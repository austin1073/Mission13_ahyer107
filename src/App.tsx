import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';
import Navbar from './Navbar';
import Podcast from './pages/Podcast';
import Home from './pages/Home';
import MoviesListed from './pages/MoviesListed';
import MovieTable from './movie/MovieTable';

// Part 1
// class Welcome extends React.Component {
//   render() {
//     return <h1>This website gives a random number</h1>;
//   }
// }

// class Conclusion extends React.Component {
//   render() {
//     return <p>Hope you enjoyed</p>;
//   }
// }

// function Rando() {
//   return (
//     <div>
//       <h2>Random Number: {Math.random()}</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Welcome />
//       <Rando />
//       <br />
//       <Conclusion />
//     </div>
//   );
// }

//Part 2
function GoButton(props: any) {
  return (
    <div>
      <button onClick={props.blahClick}>GO!</button>
      <br />
    </div>
  );
}

function AmountOfGo(props: any) {
  return <label>{props.num}</label>;
}

function App() {
  const [count, setCount] = useState(0); //One is a variable and one is a method that allows us to change the variable - React Hook
  let component;
  switch (window.location.pathname) {
    case '/':
      component = <Home />;
      break;
    case '/podcast':
      component = <Podcast />;
      break;
    case '/movieList':
      component = <MovieTable />;
      break;
  }
  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  );
}

export default App;
