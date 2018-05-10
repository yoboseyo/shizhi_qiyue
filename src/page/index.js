import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './index.css';
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
		let url = window.location.href;
		let arr = url.split('/');
		let id = arr[arr.length -1];
		fetch('http://ip-28-hanvet-app.coralcodes.com/common/getShareDiary/' + id, {
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
		let data = this.state.data;
		return (
			<div className="knowMore-page">
				{
					data ?
					<div>
						<div className="header">
							<span className="logo"></span>
							<span className="slogan">养宠，一个APP就够了</span>
							<Link to="/knowmore">了解一下<span className="icon-arrow-right"></span></Link>
						</div>
						<div className="content">
							<div className="content-header">
								<div className="avatar-wrap">
									<img src={data.userImage ? data.userImage : ''} alt={data.username ? data.username : ''}></img>
								</div>
								<div className="text-wrap">
									<div className="main">
										<p className="host-name">{data.username ? data.username : ''}</p>
										<ul className="petInfo">
											{
												data.userPets.length ? data.userPets.map((item, index) => {
													return(
														<li className="petAvatar-wrap" key="index">
															<img src={item.itemimageUrl ? item.imageUrl : ''} alt={item.name ? item.name : ''}></img>
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
												<img src={item} alt="" />
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
