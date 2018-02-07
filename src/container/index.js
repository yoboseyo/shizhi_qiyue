import React, { Component } from 'react';
import './index.css';
import '../plugin/rain/css/style.css';
import '../plugin/leaf/css/style.css'
import {withRouter} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import kaoyaMp3 from '../audio/test.mp3';
import DEMO from '../plugin/rain/js/index';
import LEAF from '../plugin/leaf/js/index';

class index extends Component{
	constructor(props){
		super(props)
		this.state = {
			data: {
				kaoya: {
					roleName: '北京烤鸭',
					txt: [
						'请原谅我那么晚还来叨扰，只是有几句话想当面对您说。',
						'听闻新年是与重要之人一起度过的节日。所以我想着今天一定要来见您一面。',
						'明日的夜晚，您会和我一同度过的吧？',
						'我会准备好和新年相配的烟花与佳肴，在约定之地等待您的到来。',
					],
					line: 2,
					checkPoint: [0, 6, 15, 20]
				},
				xiaolongxia: {
					roleName: '麻辣小龙虾',
					txt: [
						'这里吵死了，喂，我们走快一点吧？',
						'危险！待在我身后！',
						'以后没有我的允许，不准乱跑！也不准离开我的视线！',
						'你这样会让人有机可乘的，笨蛋，跟我回家！',
					],
					line: 1,
					checkPoint: [0, 5, 8, 14]
				},
				zhutongfan: {
					roleName: '竹筒饭',
					txt: [
						'啊！御侍你看！那朵烟花比这朵还大！好神奇啊……',
						'可以许愿的话……那我希望御侍以后只和我一个人说话！不可以和别人！',
						'御侍、御侍！！好多人……你别走丢了！拉紧我的手。',
						'嘿嘿嘿，好开心，希望能永远和御侍在一起。',
					],
					line: 2,
					checkPoint: [0, 7, 16, 22]
				},
				qiudaoyu: {
					roleName: '秋刀鱼',
					txt: [
						'好巧，你也在这里。',
						'这只猫咪好像很喜欢你的样子。',
						'啊……原来你是来给猫咪们送年夜饭的吗？……御侍真是个温柔的人呢。',
						'明年，院子里会有更多的猫咪吧。到那个时候，你还会来吗？',
					],
					line: 2,
					checkPoint: [0, 4, 10, 18]
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
		switch(this.props.roles){
			case 'kaoya':
				DEMO();
				break;
			case 'qiudaoyu':
				LEAF();
				break;
			default:
				break;
		}
		//DEMO();
		//LEAF();
	}
	onPlay(){
		this.rap.audioEl.play();
	}
	render(){
		let data = this.state.data;
		let role = this.props.roles;
		let bgClass = 'main_wrapper bg_' + role;
		return(
			<div className={bgClass}>
				{
					this.props.roles === 'kaoya' ?
					<canvas id="canvas"></canvas>
					: this.props.roles === 'qiudaoyu' ?
					<div class="falling-leaves"></div>
					:
					null
				}
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
						<SubTitle index={this.state.index} txtArr={data[this.props.roles].txt} isFirst={this.state.isFirst} line={data[this.props.roles].line} />
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
			<div id="sub" className={this.props.line === 1 ? 'subTitle_wrap subTitle_1_wrap' : 'subTitle_wrap subTitle_2_wrap'}>
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
