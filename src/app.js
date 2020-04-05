/**
 * app.js
 * To render react app to DOM
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.tsx';
import styles from './styles/app.css';

ReactDOM.render(<Main />, document.getElementById('app'));