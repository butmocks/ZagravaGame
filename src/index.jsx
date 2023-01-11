import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ReactDOM from 'react-dom';
import MenuBar from './navigation/Menu';
import InfoPage from './infoPage/InfoPage';



// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const rootElement = document.querySelector('#root');
// ReactDOM.render(<App />, rootElement);
