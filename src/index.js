import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider, connect } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import counter from './reducers/counter';
import Counter from './components/Counter';
import {mapDispatchToProps, mapStateToProps} from './counterContainer';

// Store
const store = createStore(counter)

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />, 
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
