import React from 'react';
import './styles/App.scss';
import FetchQuote from './components/FetchQuote/FetchQuote';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <FetchQuote />
    </div>

  );
}

export default App;   
