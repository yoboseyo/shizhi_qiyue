import React, { Component } from 'react';
import './index.css';
import ReactAudioPlayer from 'react-audio-player';
import kaoyaMp3 from '../audio/test.mp3';

export default class index extends Component{
	constructor(props){
		super(props)
		this.state = {
			subTxt: {
				kaoya: [
					'抱歉，以后不会再让您等那么久了。',
					'没什么，只是想确认御侍大人的安全，',
					'这么晚打扰到您，真的抱歉了。',
					'啊，没有笑什么，只是觉得今天很开心。',
					'为御侍大人效力——荣幸之至。'
				],
			},
			subCheckPoint: {
				kaoya: [0, 6, 10, 15, 20]
			},
			index: 0,
			boolSwitch: false
		};
		this.onHandleListen = this.onHandleListen.bind(this);
	}
	onHandleListen(passed, checkPointArr){
		let nextIndex = this.state.index;
		if(passed > checkPointArr[nextIndex]){
			nextIndex += 1;
			console.log(nextIndex);
			this.setState({index: nextIndex});
		}
	}
	render(){
		let checkPointArr = [];
		switch(this.props.location.pathname){
			case '/kaoya':
				checkPointArr = this.state.subCheckPoint.kaoya;
				break;
			default:
				break;
		}
		return(
			<div className='main_wrapper'>
				<ReactAudioPlayer
					src={kaoyaMp3}
				  autoPlay
				  listenInterval={20}
					onListen={(passed)=>{
						this.onHandleListen(passed, checkPointArr);
					}}
					onEnded={()=>{
						this.setState({boolSwitch: true});
					}}
				/>
			<SubTitle index={this.state.index} subTxtArr={this.state.subTxt.kaoya} />
			</div>
		)
	}
}

class SubTitle extends Component{
	constructor(props){
		super(props);
		this.state = {
			cName: 'subTitle'
		};
	}
	componentDidMount(){

	}
	componentWillReceiveProps(nextProps){
		if(nextProps.index > this.props.index){
			this.setState({
				cName: this.state.cName + ' an_sub_5_' + nextProps.index
			});
		}
	}
	render(){
		return(
			<div className='subTitle_wrap'>
				<div className={this.state.cName}>
					{this.props.subTxtArr.map((item, index)=>{
						return(
							<p key={index}>{item}</p>
						)
					})}
				</div>
			</div>
		)
	}
}
