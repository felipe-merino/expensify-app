import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouters'
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore();


store.dispatch(addExpense({description: 'Water bill', amount: 3425, createdAt: 6500}));
store.dispatch(addExpense({description: 'Gas bill', amount: 2140, createdAt: 8654}));
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 5326}));


const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
