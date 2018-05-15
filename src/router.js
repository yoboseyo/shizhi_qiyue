import React, { Component } from 'react';
import {
	HashRouter as Router,
	Route,
	Redirect
} from 'react-router-dom';
import Index from './page/index';
import KnowMore from './page/knowMore';

class Routes extends Component {
	render(){
		return(
			<Router basename="/">
				<div style={{height: '100%'}}>
					<Route exact path='/index.html' render={(match)=>{
							console.log(match)
								return (<Redirect to='/' />)
							}}
						/>
					<Route exact path='/' render={()=>{
								// if(prev !== 'index'){
								// 	localStorage.setItem('prev', 'index');
								// 	window.location.href = window.location.href;
								// }
								return (<Index />)
							}}
						/>
					<Route exact path='/learnmore.html' render={(match)=>{
							console.log(match)
							if (!window.mobileCheck()){
								window.location.href = 'http://ss.highwong.com/download.html';
								return null;
							}
							// if(prev !== 'learnmore'){
							// 	localStorage.setItem('prev', 'learnmore');
							// 	window.location.href = window.location.href;
							// }
							return (<KnowMore />)
						}}
					/>
				</div>
			</Router>
		)
	}
}
export default Routes;
