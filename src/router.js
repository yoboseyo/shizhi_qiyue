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
							document.title = '除夕，我在约定之地等您。'
							return (<Index roles='kaoya' />)
						}}
					/>
					<Route path='/xiaolongxia' render={()=>{
							document.title = '过年，和我待在家里！'
							return (<Index roles='xiaolongxia' />)
						}}
					/>
					<Route path='/zhutongfan' render={()=>{
							document.title = '过年想只和你在一起，对，就你。'
							return (<Index roles='zhutongfan' />)
						}}
					/>
					<Route path='/qiudaoyu' render={()=>{
							document.title = '嗯..守岁，猫咪也说要等你一起。'
							return (<Index roles='qiudaoyu' />)
						}}
					/>
				</div>
			</Router>
		)
	}
}
export default Routes;
