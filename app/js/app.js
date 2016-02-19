import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { IntlProvider } from 'react-intl';

const {locale, messages} = window.App;

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>
  , document.getElementById('example')
);

