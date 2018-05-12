import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TicTacToe from './components/TicTacToe';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TicTacToe size="3" />, document.getElementById('root'));
registerServiceWorker();
