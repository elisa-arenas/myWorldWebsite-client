/*
import React from "react";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ApolloProvider from './ApolloProvider'
import client from './ApolloProvider';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider/>
        //  <ApolloProvider />
    </React.StrictMode>
);
*/

//this works for react 17 not 18
//import React from "react";

import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import ApolloProvider from './ApolloProvider';

ReactDOM.render(ApolloProvider, document.getElementById('root'));

console.log(typeof ApolloProvider);  //object but need class/function


////"start": "react-scripts start",
    // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
