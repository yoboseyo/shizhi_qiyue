import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './index.css';
import Zmage from 'react-zmage';
import moment from 'moment';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Index extends Component {
	constructor () {
		super();
		this.state = {
			data: null
		};
		this.getShareDiary = this.getShareDiary.bind(this);
	}
	getShareDiary () {
		function getQueryString (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
		// let url = window.location.href;
		// // let url = 'http://ip-28-hanvet-app.coralcodes.com/common/getShareDiary/Index.html?id=10'
		// let arr = url.split('?');
		// arr = arr[arr.length - 1].split('=');
		let id = getQueryString('id');
		console.log(window.location.host)
		fetch('http://' + window.location.host + '/common/getShareDiary/' + id, {
			method: 'GET',
		}).then(response => {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response.json();
    }).then(res => {
      if (res.code === 'OK') {
				this.setState({
					data: res.data
				});
				// console.log(JSON.stringify(res.data));
			} else {
				console.log(res.code);
			}
    });
	}
	componentDidMount () {
		this.getShareDiary();
	}
	render () {
		const data = this.state.data;
		// const url = 'http://' + window.location.host
		// console.log(url)
		return (
			<div className="knowMore-page">
				{
					data ?
					<div>
						<div className="header">
							<span className="logo"></span>
							<span className="slogan">养宠，一个APP就够了</span>
							<Link to="/learnmore.html">了解一下<span className="icon-arrow-right"></span></Link>
						</div>
						<div className="content">
							<div className="content-header">
								<div className="avatar-wrap">
									<img src={data.userImage ? data.userImage : ''} alt={data.userName ? data.userName : ''} />
								</div>
								<div className="text-wrap">
									<div className="main">
										<p className="host-name">{data.userName ? data.userName : ''}</p>
										<ul className="petInfo">
											{
												data.userPets.length ? data.userPets.map((item, index) => {
													return(
														<li className="petAvatar-wrap" key={index}>
															<img src={item.imageUrl ? item.imageUrl : ''} alt={item.name ? item.name : ''} />
														</li>
													)
												})
												:
												null
											}
										</ul>
									</div>
									<p className="intro">{data.body}</p>
								</div>
							</div>
							<ul className="img-list">
								{
									data.phones ? data.phones.map((item, index) => {
										return(
											<li key={index}>
												<Zmage
													src={item}
													alt=""
													controller={{
														close: true,
												    zoom: false,
												    pagination: false
													}} />
											</li>
										)
									})
									:
									null
								}
							</ul>
							<p className="post-time">{data.createTime ? moment(data.createTime).format('YYYY-MM-DD hh:mm ') : ''}{data.week ? data.week : ''}</p>
							<div className="dec-line"></div>
						</div>
					</div>
					:
					null
				}
			</div>
		)
	}
}

export default withRouter(Index);
