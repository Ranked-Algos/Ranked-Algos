import React from 'react';
import ReactDOM from 'react-dom'
import './styles.scss';
import App from './App.jsx';
import store from './redux/Store.jsx';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store = {store}>
       <App/>
   </Provider>,
   document.getElementById('root')
 )
