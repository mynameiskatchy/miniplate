/**
 * app.js
 * To render react app to DOM
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.jsx';

ReactDOM.render(
<div>
    This is app.js
    <Main /> 
</div>, 
document.getElementById('app'));