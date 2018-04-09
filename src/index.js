
/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './assets/style.css';

class Root extends React.Component {
	render() {
		return <App/>;
	}
}

ReactDOM.render(
	<Root/>,
	document.getElementById('root')
);
