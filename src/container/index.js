import React, { Component } from 'react';
import './index.css';
import '../plugin/rain/css/style.css';
import '../plugin/leaf/css/style.css'
import {withRouter} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import kaoyaMp3 from '../audio/test.mp3';
import DEMO from '../plugin/rain/js/index';
import LEAF from '../plugin/leaf/js/index';
import vConsole from 'vconsole';
import $ from 'jquery';
import '../plugin/ripples/jquery.ripples-min.js';
new vConsole();

class index extends Component{
	constructor(props){
		super(props)
		this.state = {
			data: {
				kaoya: {
					roleName: '北京烤鸭',
					txt: [
						'抱歉，以后不会再让您等那么久了。',
						'没什么，只是想确认御侍大人的安全，',
						'这么晚打扰到您，真的抱歉了。',
						'啊，没有笑什么，只是觉得今天很开心。',
						'为御侍大人效力——荣幸之至。'
					],
					checkPoint: [0, 6, 10, 15, 20]
				}


			},
			index: 0,
			boolSwitch: false,
			boolShare: false,
			point: 0,
			//iOS中safari使用state
			playEnd: true,
			isFirst: true
		};
		this.onHandleListen = this.onHandleListen.bind(this);
		this.onShareSwitch = this.onShareSwitch.bind(this);
		this.onReset = this.onReset.bind(this);
		this.onPlay = this.onPlay.bind(this);
	}
	onHandleListen(passed, checkPoint){
		let nextIndex = this.state.index;
		if(passed > checkPoint[nextIndex]){
			nextIndex += 1;
			this.setState({index: nextIndex});
			this.setState({point: passed});
		}
	}
	onShareSwitch(bool){
		this.setState({ boolShare: bool });
	}
	onReset(){
		this.setState({
			boolSwitch: false,
			boolShare: false
		});
		this.setState({point: 0});
		this.rap.audioEl.currentTime = 0.0;
		this.rap.audioEl.play();
	}
	componentDidMount(){
		//DEMO();
		//LEAF();
		console.log($('.main_wrapper'));
	}
	onPlay(){
		this.rap.audioEl.play();
	}
	render(){
		let data = this.state.data;
		return(
			<div className="main_wrapper">
				<div class="falling-leaves"></div>
				<canvas id="canvas"></canvas>
				<div className={this.state.boolSwitch ? 'shade shade_wrapper_2' : 'shade shade_wrapper_1'}>
					<ReactAudioPlayer
						ref={(element)=>{ this.rap = element; }}
						src={kaoyaMp3}
						className="bgm"
					  listenInterval={20}
						onListen={(passed)=>{
							this.onHandleListen(passed, data[this.props.roles].checkPoint);
						}}
						onEnded={()=>{
							this.setState({boolSwitch: true, index: 0, playEnd: true});
						}}
					/>
					{/*
						<audio preload='preload' loop className='bgm2' controls src='http://stor.cloudmusics.cn/mp3/2018/02/c68bbd516f2acc2a844c7b786c71fec2.mp3'></audio>
					*/}
					{
						this.state.boolSwitch ?
						<EndPart roleName={data[this.props.roles].roleName} txtArr={data[this.props.roles].txt} onShareSwitch={this.onShareSwitch} onReset={this.onReset} />
						:
						<SubTitle index={this.state.index} txtArr={data[this.props.roles].txt} isFirst={this.state.isFirst} />
					}
				</div>
				{
					this.state.boolShare ?
					<div
						className="shade_share"
						onTouchEnd={()=>{
							this.onShareSwitch(false);
						}}
					></div>
					:
					null
				}
				<div className="point">{this.state.point}</div>
				{
					!window.canAutoPlay() && this.state.playEnd && this.state.isFirst ?
					<div
						onTouchStart={(e)=>{
							if(window.canAutoPlay()){
								return;
							} else if(this.state.playEnd) {
								this.onPlay();
								this.setState({playEnd: false, isFirst: false});
							}
						}}
						className="play_shade"
					></div>
					:
					null
				}
			</div>
		)
	}
}

class SubTitle extends Component{
	constructor(props){
		super(props);
		this.state = {
			length: props.txtArr.length
		};
	}
	componentDidMount(){

	}
	componentWillReceiveProps(nextProps){
		if(nextProps.index > this.props.index || nextProps.index === 0){
			// this.setState({
			// 	cName:  'subTitle an_sub_5_' + this.props.index + ' an_sub_5_' + nextProps.index
			// });
			let height = this.refs.subTitle.offsetHeight/this.state.length;
			this.refs.subTitle.style.top = height - nextProps.index*height + 'px';
		}
	}
	render(){
		return(
			<div id="sub" className="subTitle_wrap">
				<div ref="subTitle" className="subTitle">
					{this.props.txtArr.map((item, index)=>{
						return(
							<p key={index}>{item}</p>
						)
					})}
				</div>
				{
					this.props.isFirst && !window.canAutoPlay() ?
					<div className="play_txt">点击屏幕开始播放</div>
					:
					null
				}
			</div>
		)
	}
}

class EndPart extends Component{
	constructor(props){
		super(props);
		this.state = {
			ztybHover: false,
			shareHover: false
		};
	}
	onBtnTrigger(e, func){
		if(e.changedTouches.length === 1){
			let touches = e.changedTouches['0']
			let x = touches.clientX;
			let y = touches.clientY;
			let target = touches.target;
			let xMin = target.offsetLeft;
			let xMax = xMin + target.offsetWidth;
			let yMin = target.offsetTop + target.offsetParent.offsetTop;
			let yMax = yMin + target.offsetHeight;
			if(x >= xMin && x <= xMax && y >= yMin && y <= yMax){
				func();
			}
		}
	}
	render(){
		return(
			<div className="endPart_wrapper fadeIn">
				<div className="role_name">
					{this.props.roleName}
				</div>
				<div className="txt_wrapper">
					{this.props.txtArr.map((item, index)=>{
						return(
							<p key={index}>{item}</p>
						)
					})}
				</div>
				<div className="btn_wrapper">
					<span
						className={this.state.ztybHover ? 'btn_ztyb hover' : 'btn_ztyb'}
						onTouchStart={(e)=>{
							e.preventDefault();
							this.setState({ztybHover: true});
						}}
						onTouchEnd={(e)=>{
							e.preventDefault();
							this.onBtnTrigger(e, this.props.onReset);
							this.setState({ztybHover: false});
						}}
					></span>
					<span
						className={this.state.shareHover ? 'btn_share hover' : 'btn_share'}
						onTouchStart={(e)=>{
							e.preventDefault();
							this.setState({shareHover: true});
						}}
						onTouchEnd={(e)=>{
							let _this = this;
							e.preventDefault();
							this.onBtnTrigger(e, function(){_this.props.onShareSwitch(true)});
							this.setState({shareHover: false});
						}}
					></span>
				</div>
			</div>
		)
	}
}

export default withRouter(index);
