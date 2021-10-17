import '@fontsource/raleway/500.css';
import '@fontsource/raleway/600.css';
import React from 'react';
import ReactDOM from 'react-dom';
import '@emperorjack/refinery-ui/dist/index.css';
import { RefineryProvider } from '@emperorjack/refinery-ui';
import App from './components/App';
import './styles/ui/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <RefineryProvider>
      <App />
    </RefineryProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
