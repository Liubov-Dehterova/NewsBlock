import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NewsOne from './components/NewsOne'


class App extends Component {
	render() {
		return (
			<>
				<NewsOne />

			</>
		);
	}
}

ReactDOM.render(
    <App />,

    document.getElementById('app')
)