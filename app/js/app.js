import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import enLocaleData from 'react-intl/locale-data/en';
import App from './components/App';
import reducer from './redux/counter';

addLocaleData(enLocaleData);
const { locale, messages } = window.App;

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  </Provider>
  , document.getElementById('example')
);
