import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Index from './page/index';
import KnowMore from './page/knowMore';

class Routes extends Component {
	render(){
		return(
			<Router>
				<div style={{height: '100%'}}>
					<Route exact path='/index.html' render={()=>{
								document.title = '嗨汪';
								return (<Index />)
							}}
						/>
					<Route path='/knowmore' render={()=>{
							document.title = '嗨汪';
							return (<KnowMore />)
						}}
					/>
				</div>
			</Router>
		)
	}
}
export default Routes;
