import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import weChatShare from './weChatShare/weChatShare';

import icon_ky from './image/img_ky.png';
import icon_xlx from './image/img_mlxlx.png';
import icon_ztf from './image/img_ztf.png';
import icon_qdy from './image/img_qdy.png';
import icon_qkl from './image/img_qkl.png';
import icon_glg from './image/img_glg.png';
import icon_yw from './image/img_lsyw.png';
import icon_cy from './image/img_xhcy.png';
import icon_eg from './image/img_fseg.png';
import icon_ftj from './image/img_ftj.png';
import icon_tlms from './image/img_tlms.png';

import Index from './container/index'

class Routes extends Component {
	render(){
		return(
			<Router>
				<div style={{height: '100%'}}>
					<Route path='/kaoya' render={()=>{
							weChatShare({
								desc: '除夕，我在约定之地等您。',
								imgUrl: {icon_ky}
							});
							return (<Index roles='kaoya' />)
						}}
					/>
					<Route path='/xiaolongxia' render={()=>{
							weChatShare({
								desc: '过年，和我待在家里！',
								imgUrl: {icon_xlx}
							});
							return (<Index roles='xiaolongxia' />)
						}}
					/>
					<Route path='/zhutongfan' render={()=>{
							weChatShare({
								desc: '过年想只和你在一起，对，就你。',
								imgUrl: {icon_ztf}
							});
							return (<Index roles='zhutongfan' />)
						}}
					/>
					<Route path='/qiudaoyu' render={()=>{
							weChatShare({
								desc: '嗯..守岁，猫咪也说要等你一起。',
								imgUrl: {icon_qdy}
							});
							return (<Index roles='qiudaoyu' />)
						}}
					/>
					<Route path='/qiaokeli' render={()=>{
							weChatShare({
								desc: '明年，在我身边绽放笑颜吧',
								imgUrl: {icon_qkl}
							});
							return (<Index roles='qiaokeli' />)
						}}
					/>
					<Route path='/guilinggao' render={()=>{
							weChatShare({
								desc: '别害怕，还有我在这里。',
								imgUrl: {icon_glg}
							});
							return (<Index roles='guilinggao' />)
						}}
					/>
					<Route path='/yunwu' render={()=>{
							weChatShare({
								desc: '青山之中，与你静候新岁。',
								imgUrl: {icon_yw}
							});
							return (<Index roles='yunwu' />)
						}}
					/>
					<Route path='/cuyu' render={()=>{
							weChatShare({
								desc: '想要和您一起，看空中的繁花。',
								imgUrl: {icon_cy}
							});
							return (<Index roles='cuyu' />)
						}}
					/>
					<Route path='/egan' render={()=>{
							weChatShare({
								desc: '在新旧交替的此刻，我们相遇了。',
								imgUrl: {icon_eg}
							});
							return (<Index roles='egan' />)
						}}
					/>
					<Route path='/futejia' render={()=>{
							weChatShare({
								desc: '除夕？...你得陪我喝到尽兴才行。',
								imgUrl: {icon_ftj}
							});
							return (<Index roles='futejia' />)
						}}
					/>
					<Route path='/tilamisu' render={()=>{
							weChatShare({
								desc: '您的新年愿望，是什么呢？',
								imgUrl: {icon_tlms}
							});
							return (<Index roles='tilamisu' />)
						}}
					/>
				</div>
			</Router>
		)
	}
}
export default Routes;
