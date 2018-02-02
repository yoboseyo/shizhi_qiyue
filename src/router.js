import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route } from 'react-router-dom';

import Index from './container/index'

class Routes extends Component {
	render(){
		return(
			<Router>
				<Route path='/kaoya' component={Index} />
			</Router>
		)
	}
}

export default Routes;
