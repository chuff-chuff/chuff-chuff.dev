import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>ちゃふちゃふウェブ | 喋ってWebを作る</title>
        <meta name="description" content="ちゃふちゃふウェブは喋ること、つまりコミュニケーションを大切にしてWebの制作を行っています。あなたの思いに耳を傾け、私の思いも伝える。あなたと、私と、Webを使うユーザーのことを考える開発者。それがちゃふちゃふウェブです。"></meta>
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
