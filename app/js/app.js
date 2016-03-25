import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { IntlProvider, addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';

addLocaleData(enLocaleData);
const { locale, messages } = window.App;

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>
  , document.getElementById('example')
);
