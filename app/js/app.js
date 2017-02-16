import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import enLocaleData from 'react-intl/locale-data/en';
import App from './components/App';
import configureStore from './store';

addLocaleData(enLocaleData);
const { locale, messages }: { locale: string, messages: Object } = window.App;

ReactDOM.render(
  <Provider store={configureStore()}>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  </Provider>
  , document.getElementById('example')
);
