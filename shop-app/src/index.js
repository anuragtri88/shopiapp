import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals'
import {store, persistor} from './store';


const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
);
reportWebVitals()