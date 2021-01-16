import React from 'react';
import ReactDOM from 'react-dom';
import Base from '@bit/emperorjack.refinery-ui.utility.base';
import App from './components/App';
import './styles/ui/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
