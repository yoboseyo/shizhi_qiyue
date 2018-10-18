import React, { Component } from 'react';
import './index.css';
import '../plugin/rain/css/style.css';
import '../plugin/leaf/css/style.css'
import {withRouter, Link} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

import kaoyaMp3 from '../audio/kaoya.mp3';
import xiaolongxiaMp3 from '../audio/xiaolongxia.mp3';
import tilamisuMp3 from '../audio/tilamisu.mp3';
import zhutongfanMp3 from '../audio/zhutongfan.mp3';
import qiaokeliMp3 from '../audio/qiaokeli.mp3';
import qiudaoyuMp3 from '../audio/qiudaoyu.mp3';
import eganMp3 from '../audio/egan.mp3';
import futejiaMp3 from '../audio/futejia.mp3';
import yunwuMp3 from '../audio/yunwu.mp3';
import cuyuMp3 from '../audio/cuyu.mp3';
import guilinggaoMp3 from '../audio/guilinggao.mp3';

import DEMO from '../plugin/rain/js/index';
import LEAF from '../plugin/leaf/js/index';
import SNOW from '../plugin/snow/js/jquery.let_it_snow';
//import vConsole from 'vconsole';
//new vConsole();

class index extends Component{
	constructor(props){
		super(props)
		this.state = {
			data: {
				kaoya: {
					roleName: '北京ダック',  //done
					cv: '(CV:日野聡)',
					txt: [
						'お帰りなさいませ。',
						'御侍様がおられぬ間、この子らがいささかも落ち着きませんでした。つられて吾まで、とぼついてしまいました。',
					],
					line: 2,
					lineArr: [1, 2],
					checkPoint: [7, 9]
				},
				xiaolongxia: {
					roleName: '麻辣ザリガニ',  //done
					cv: '(CV:江口拓也)',
					txt: [
						'やっと帰ったか？遅い！言っただろう、あっちこっちうろつくんじゃない！',
						'てめぇを苛めていいのは俺様だけだ、だから俺様の見えない所に隠れるんじゃない。'
					],
					line: 2,
					lineArr: [2, 2],
					checkPoint: [1, 10]
				},
				zhutongfan: {
					roleName: '竹飯',  //done
					cv: '(CV:鈴木達央)',
					txt: [
						'このまま俺様のそばにいてくれりゃいいんだよ！',
					],
					line: 1,
					lineArr: [],
					checkPoint: [3]
				},
				qiudaoyu: {
					roleName: 'さんまの塩焼き',  //done
					cv: '(CV:日野聡)',
					txt: [
						'足元に気をつけて、僕の友達がそこにいる…',
						'あれ？どうやら君のことを気に入ったみたい。',
						'ニャンたちは、とても賢い……だから、大事にしてあげて。',
					],
					line: 2,
					lineArr: [1, 1, 2],
					checkPoint: [0.5, 7, 14]
				},
				qiaokeli: {
					roleName: 'チョコレート',  //done
					cv: '(CV:興津和幸)',
					txt: [
						'もし君にこのバラを贈ったら、受け取ってくれる？',
						'フフ、どうしたの？顔真っ赤だよ。本当に、可愛い。',
					],
					line: 1,
					lineArr: [],
					checkPoint: [1, 6]
				},
				guilinggao: {
					roleName: '亀苓膏',
					cv: '(CV:寺島拓篤)',
					txt: [
						'御侍、店を開いている以上、掃除を怠ってはならない。',
						'清潔感のない店に誰が来たいと思うんだ？やれやれ、私がやっておいてやる。',
					],
					line: 2,
					lineArr: [1, 2],
					checkPoint: [2, 8.5]
				},
				yunwu: {
					roleName: '庐山云雾',  //done
					cv: '(CV:冯骏骅)',
					txt: [
						'霧と香りに包まれしこの最果の地に、こうしてそなたと出会いしこと、これ全て「縁」の導き哉。',
						'雲霧、変幻し消えていく…なれど山々は、いつまでも変わらぬ。',
					],
					line: 2,
					lineArr: [2, 2],
					checkPoint: [1, 14]
				},
				cuyu: {
					roleName: '西湖酢魚',  //done
					cv: '(CV:井上喜久子)',
					txt: [
						'妾は西湖酢魚、ふつつか者ですが、以後、お見知り置きを。',
					],
					line: 2,
					lineArr: [],
					checkPoint: [3]
				},
				egan: {
					roleName: 'フォアグラソテー',  //done
					cv: '(CV:浅野真澄)',
					txt: [
						'ふん、ついに、私と出会ってしまったわね……',
						'運命からは逃れられない、私も、君も。',
					],
					line: 1,
					lineArr: [],
					checkPoint: [3, 11]
				},
				futejia: {
					roleName: 'ウォッカ',  //done
					cv: '(CV:川澄綾子)',
					txt: [
						'あんたがその料理御侍とかいう奴？',
						'ま、いいでしょう。アンデレには清潔できちんとした寝床が必要よ、決して疎かにしないで。',
						'私なら…酒があれば充分。'
					],
					line: 2,
					lineArr: [1, 2, 1],
					checkPoint: [2, 7, 17]
				},
				tilamisu: {
					roleName: 'ティラミス',  //done
					cv: '(CV:北川里奈)',
					txt: [
						'わたくしを選んで頂けるとは、未だに夢を見ているような気分です。',
						'御侍様と共に過ごす一分一秒を、大切にしていたいと思っています。',
					],
					line: 2,
					lineArr: [2, 2],
					checkPoint: [0.5, 6]
				}
			},
			index: 0,
			boolSwitch: false,
			boolShare: false,
			point: 0,
			// iOS中safari使用state
			playEnd: true,
			isFirst: true,
			// 是否可以播放
			canPlay: false,
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
		// let _this = this;
		let source=document.createElement('source');
		switch(this.props.roles){
			case 'kaoya':
				source.src = kaoyaMp3;
				DEMO();
				break;
			case 'qiudaoyu':
				source.src = qiudaoyuMp3;
				LEAF(this.props.roles);
				break;
			case 'tilamisu':
				source.src = tilamisuMp3;
				LEAF(this.props.roles);
				break;
			case 'zhutongfan':
				source.src = zhutongfanMp3;
				LEAF(this.props.roles);
				break;
			case 'xiaolongxia':
				source.src = xiaolongxiaMp3;
				SNOW(window.jQuery);
				break;
			case 'egan':
				source.src = eganMp3;
				break;
			case 'cuyu':
				source.src = cuyuMp3;
				break;
			case 'qiaokeli':
				source.src = qiaokeliMp3;
				break;
			case 'futejia':
				source.src = futejiaMp3;
				break;
			case 'guilinggao':
				source.src = guilinggaoMp3;
				break;
			case 'yunwu':
				source.src = yunwuMp3;
				break;
			default:
				break;
		}
		this.rap.audioEl.appendChild(source);
		// if(window.isWeChat()){
		// 	document.addEventListener("WeixinJSBridgeReady", function () {
		// 		_this.rap.audioEl.play();
		// 	}, false);
		// }
	}
	componentWillUnmount() {
		this.setState({
			boolSwitch: false,
			boolShare: false,
			canPlay: false,
			point: 0,
		});
	}
	onPlay(){
		this.rap.audioEl.play();
	}
	handleOnCanPlayThrougt = () => {
		this.setState({
			canPlay: true,
		});
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
					: this.props.roles === 'qiudaoyu' || this.props.roles === 'tilamisu' || this.props.roles === 'zhutongfan' ?
					<div className="falling-leaves"></div>
					: this.props.roles === 'xiaolongxia' ?
					<canvas className="snow"></canvas>
					:
					null
				}
				<div className={this.state.boolSwitch ? 'shade shade_wrapper_2' : 'shade shade_wrapper_1'}>
					<ReactAudioPlayer
						ref={(element)=>{ this.rap = element; }}
						className="bgm"
					  listenInterval={20}
						onCanPlayThrough={this.handleOnCanPlayThrougt}
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
						<EndPart roleName={data[this.props.roles].roleName} txtArr={data[this.props.roles].txt} cv={data[this.props.roles].cv} onShareSwitch={this.onShareSwitch} onReset={this.onReset} />
						:
						<SubTitle
							index={this.state.index}
							canPlay={this.state.canPlay}
							txtArr={data[this.props.roles].txt}
							isFirst={this.state.isFirst}
							line={data[this.props.roles].line}
							lineArr={data[this.props.roles].lineArr}
						/>
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
					<a href="http://food.funtoygame.com" target="_blank" className="download">
					</a>
				 }
				{/* <div className="point">{this.state.point}</div> */}
				{
					this.state.playEnd && this.state.isFirst ?
					<div
						onTouchStart={(e)=>{
							// if(window.isWeChat()){
							// 	return;
							// } else if(this.state.playEnd) {
							// 	this.onPlay();
							// 	this.setState({playEnd: false, isFirst: false});
							// }
							if (this.state.playEnd && this.state.canPlay) {
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
							<p
								key={index}
								className={this.props.lineArr[index] === 1 ? 'oneline' : ''}
								dangerouslySetInnerHTML={{ __html: item}}
							>
							</p>
						)
					})}
				</div>
				{
					// this.props.isFirst && !window.isWeChat() ?
					this.props.isFirst ?
					<div className={this.props.line === 1 ? 'play_txt play_txt_1' : 'play_txt play_txt_2'}>
						{
							!this.props.canPlay ? 'Loading...' : '点击屏幕开始播放'
						}
					</div>
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
					<span>{this.props.cv}</span>
				</div>
				<div className="txt_wrapper">
					{this.props.txtArr.map((item, index)=>{
						return(
							<p key={index} dangerouslySetInnerHTML={{ __html: item}}></p>
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
					<a
						className={this.state.shareHover ? 'btn_share hover twitter-share-button' : 'btn_share twitter-share-button'}
					  href="https://twitter.com/intent/tweet?url=http://vx78ij.natappfree.cc/egan"
						onTouchStart={(e)=>{
							this.setState({shareHover: true});
						}}
						onTouchEnd={(e)=>{
							this.setState({shareHover: false});
						}}
					>
					</a>
				</div>
			</div>
		)
	}
}

export default withRouter(index);
