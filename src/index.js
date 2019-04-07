//IMport React ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


//Create React Component

// const App = ()=>{
//     return <div>HI There!</div>
// }

ReactDOM.render(
   <Provider store={createStore(reducers)}>
    <App/>
   </Provider>
    ,
    document.querySelector('#root')
 );