import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReactSwipe from 'react-swipe';
import './knowMore.css';
import banner_1 from '../image/banner_1.jpg';
import banner_2 from '../image/banner_2.jpg';
import banner_3 from '../image/banner_3.jpg';
import banner_4 from '../image/banner_4.jpg';
import app_icon from '../image/app_icon.png';
import vConsole from 'vconsole';
new vConsole();

class KnowMore extends Component {
	constructor () {
		super();
		this.state = {
			imgArr: [ banner_1, banner_2, banner_3, banner_4 ],
			swipeIndicator: 0
		};
	}
	render () {
		return (
			<div className="index-page">
				<div className="swipe-wrap">
					<ReactSwipe
						className="carousel"
						swipeOptions={{
							startSlide: 0,
						  speed: 400,
						  auto: 3000,
						  continuous: true,
						  disableScroll: false,
						  stopPropagation: false,
						  callback: (index, elem) => {
								this.setState({
									swipeIndicator: index
								});
							}
						  // transitionEnd: function(index, elem) {}
						}}
						style={{
							container: {
								overflow: 'hidden',
								visibility: 'hidden',
								position: 'relative',
								height: '100%'
						 	},
							wrapper: {
								overflow: 'hidden',
								position: 'relative',
								height: '100%'
							 },
							child: {
							  float: 'left',
							  width: '100%',
								height: '100%',
							  position: 'relative',
							  transitionProperty: 'transform'
						  }
						}}>
						{
							this.state.imgArr.map((item, index) => {
								return (
									<div key={index}>
										<img src={item} alt="" />
									</div>
								)
							})
						}
          </ReactSwipe>
					<div className="swipe-indicator">
						{
							this.state.imgArr.map((item, index) => {
								return (
									<span className={this.state.swipeIndicator === index ? 'active' : ''} key={index}></span>
								)
							})
						}
					</div>
				</div>
				<div className="content">
					<div className="appIcon-wrap">
						<img src={app_icon}  alt="嗨汪" />
					</div>
					<div className="download-wrap">
						<Link to="">
							<span className="icon-android"></span>
							安卓端下载
							<span className="icon-down"></span>
						</Link>
						<a href="https://itunes.apple.com/cn/app/%E5%97%A8%E6%B1%AA/id1361036651">
							<span className="icon-ios"></span>
							IOS端下载
							<span className="icon-down"></span>
						</a>
					</div>
				</div>
				<div className="slogan"></div>
			</div>
		)
	}
}

export default withRouter(KnowMore);
