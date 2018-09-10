import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
// Redux
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTexFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// styles
import 'normalize.css/normalize.css'
import './styles/style.scss';
//Firebase
import './firebase/firebase';

const store = configureStore();
// console.log('test');
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})


