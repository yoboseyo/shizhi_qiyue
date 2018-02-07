import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import Index from './container/index'

class Routes extends Component {
	render(){
		return(
			<Router>
				<div style={{height: '100%'}}>
					<Route path='/kaoya' render={()=>{
							
							document.title = '北京烤鸭の电话'
							return (<Index roles='kaoya' />)
						}}
					/>
					<Route path='/haha' render={() => <Index roles='haha' />} />
				</div>
			</Router>
		)
	}
}
export default Routes;
