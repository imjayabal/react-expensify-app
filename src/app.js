import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

// Redux
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTexFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// styles
import 'normalize.css/normalize.css'
import './styles/style.scss';

const store = configureStore();
// console.log('test');
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
