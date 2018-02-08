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
					<Route path='/qiaokeli' render={()=>{
							document.title = '明年，在我身边绽放笑颜吧'
							return (<Index roles='qiaokeli' />)
						}}
					/>
					<Route path='/guilinggao' render={()=>{
							document.title = '别害怕，还有我在这里。'
							return (<Index roles='guilinggao' />)
						}}
					/>
					<Route path='/yunwu' render={()=>{
							document.title = '青山之中，与你静候新岁'
							return (<Index roles='yunwu' />)
						}}
					/>
					<Route path='/cuyu' render={()=>{
							document.title = '想要和您一起，看空中的繁花。'
							return (<Index roles='cuyu' />)
						}}
					/>
					<Route path='/egan' render={()=>{
							document.title = '在新旧交替的此刻，我们相遇了'
							return (<Index roles='egan' />)
						}}
					/>
					<Route path='/futejia' render={()=>{
							document.title = '除夕？...你得陪我喝到尽兴才行。'
							return (<Index roles='futejia' />)
						}}
					/>
					<Route path='/tilamisu' render={()=>{
							document.title = '您的新年愿望，是什么呢？'
							return (<Index roles='tilamisu' />)
						}}
					/>
				</div>
			</Router>
		)
	}
}
export default Routes;
