import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>ちゃふちゃふウェブ | 喋ってWebを作る</title>
        <script type="application/javascript">{`
        {
            (function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TCGD5WQ');
        }
    `}</script>
        <meta name="description" content="ちゃふちゃふウェブは喋ること、つまりコミュニケーションを大切にしてWebの制作を行っています。あなたの思いに耳を傾け、私の思いも伝える。あなたと、私と、Webを使うユーザーのことを考える開発者。それがちゃふちゃふウェブです。"></meta>
      </Helmet>
      <noscript>{`
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCGD5WQ" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `}</noscript>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="ちゃふちゃふウェブ" />
      </header>
      <Footer />
    </div>
  );
}

export default App;
